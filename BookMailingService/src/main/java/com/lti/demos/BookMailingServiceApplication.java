package com.lti.demos;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import com.lti.demos.model.BookMailOrder;
import com.lti.demos.repository.BookMailRepository;

@SpringBootApplication
@EnableEurekaClient
public class BookMailingServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookMailingServiceApplication.class, args);
	}

	@Bean
	public ApplicationRunner runner(BookMailRepository repository)
	{
		return args->{
		Stream.of(
				new BookMailOrder(1,"a@gmail.com","B1",LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd:MM:yyyy HH:mm:ss"))),
				new BookMailOrder(2,"b@gmail.com","B2",LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd:MM:yyyy HH:mm:ss"))),
				new BookMailOrder(3,"a@gmail.com","B3",LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd:MM:yyyy HH:mm:ss")))
				).forEach(bookorder -> repository.save(bookorder));
		
		repository.findAll().forEach(System.out::println);	
		};
	}
}
