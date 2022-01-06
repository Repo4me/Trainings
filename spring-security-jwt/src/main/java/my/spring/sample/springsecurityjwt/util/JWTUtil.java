package my.spring.sample.springsecurityjwt.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JWTUtil {

	private static String SECRETE_KEY = "secrete";
	
	
	public String extractUserName(String jwtToken) { 
	
		return extractClaim(jwtToken, Claims::getSubject);
	}
	
	public Date extractExpiration(String jwtToken) {
		return extractClaim(jwtToken, Claims::getExpiration);
	}
	 
	public <T>T extractClaim(String jwtToken, Function<Claims, T> claimsResolver) {
		final Claims claims = extractAllClaims(jwtToken);
		return claimsResolver.apply(claims);
	}
	
	private Claims extractAllClaims(String jtwToken) {
		return Jwts.parser().setSigningKey(SECRETE_KEY).parseClaimsJwt(jtwToken).getBody();
	}
	
	private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
	
	public Boolean validateToken(String jwtToken, UserDetails userDetails) {
		
		String userName = extractUserName(jwtToken);
		return (userName.equals(userDetails.getUsername()) && !isTokenExpired(jwtToken));
	}
	
	public String generateToken(UserDetails userDetails) {
		
		Map<String, Object> claims = new HashMap<String, Object>();
		return createToken(claims, userDetails.getUsername());
		
	}
	
	private String createToken(Map<String, Object> claims, String subject)	{
		
		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis()  + 1000 * 60 *60 * 10))
				.signWith(SignatureAlgorithm.HS256, SECRETE_KEY)
				.compact();
	}
}
