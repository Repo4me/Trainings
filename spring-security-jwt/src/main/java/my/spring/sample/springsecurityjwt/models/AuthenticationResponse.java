package my.spring.sample.springsecurityjwt.models;

public class AuthenticationResponse {

	private String jwtToken;

	public AuthenticationResponse(String jwtToken) {
		super();
		this.jwtToken = jwtToken;
	}

	public String getJwtToken() {
		return jwtToken;
	}
}