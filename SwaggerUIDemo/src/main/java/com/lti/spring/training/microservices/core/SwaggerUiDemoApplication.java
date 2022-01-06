package com.lti.spring.training.microservices.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class SwaggerUiDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SwaggerUiDemoApplication.class, args);
	}

}
