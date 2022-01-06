package com.techgatha.respository;

import org.springframework.data.repository.CrudRepository;

import com.techgatha.model.User;

public interface UserRepository extends CrudRepository<User, String> {

}
