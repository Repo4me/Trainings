package springmvc.service;

import springmvc.model.Login;
import springmvc.model.User;

public interface UserService {

	void register(User user);

	User validateUser(Login login);
	  
}
