package com.techgatha.resource;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techgatha.model.User;
import com.techgatha.respository.UserRepository;

@RestController
@RequestMapping("/users")
public class UserResource {

	@Autowired
	private UserRepository repository;
	@GetMapping
	public List<User> getUsers()
	{
		List<User> users = new ArrayList<User>();
		repository.findAll().forEach(users::add);
		return users;
	}
	
}
