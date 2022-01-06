package springmvc.dao;

import springmvc.model.Login;
import springmvc.model.User;

public interface UserDao {

	void register(User user);
	User validateUser(Login login);

}
