package my.spring.sample.springsecurityjwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import my.spring.sample.springsecurityjwt.models.AuthenticationRequest;
import my.spring.sample.springsecurityjwt.models.AuthenticationResponse;
import my.spring.sample.springsecurityjwt.util.JWTUtil;

@RestController
public class HelloResource {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	JWTUtil jwtUtil;

	@Autowired
	UserDetailsService userDetailsService;

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String hello() {
		return "Hellow World!";
	}

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

		System.out.println("Received rewq");

		try { 
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUserName(), authenticationRequest.getPassword())); 
		} catch (BadCredentialsException ex) {
			throw new Exception("Incorrect credentials provided"); 
		}

		UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUserName());

		String jwtToken = jwtUtil.generateToken(userDetails);

		return ResponseEntity.ok(new AuthenticationResponse(jwtToken));



	}
}
