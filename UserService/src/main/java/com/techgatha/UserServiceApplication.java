package com.techgatha;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.techgatha.model.User;
import com.techgatha.respository.UserRepository;

@SpringBootApplication
public class UserServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}
	
	@Bean
    ApplicationRunner init(UserRepository repository) {
        return args -> {
            Stream.of("shalini@gmail.com", "priya@yahoo.com", "suhas@rediffmail.com", "riya@gmail.com").forEach(email -> {
                repository.save(new User(email));
            });
            repository.findAll().forEach(System.out::println);
        };
    }

}
