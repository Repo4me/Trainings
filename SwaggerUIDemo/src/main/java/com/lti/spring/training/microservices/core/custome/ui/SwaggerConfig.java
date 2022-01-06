package com.lti.spring.training.microservices.core.custome.ui;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {

	@Bean
	public Docket docket() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.paths(PathSelectors.ant("/books/**"))
				.apis(RequestHandlerSelectors.basePackage("com.lti.spring.training.microservices.core.controller"))
				.build()
				.apiInfo(apiInfo());
	}
	
	private ApiInfo apiInfo()
    {
        return new ApiInfo("Book Store", 
                "Technical books rest API", 
                "1,0", "http://terms.com", 
                new Contact("Shalini", "http://www.techgatha.com", "contact@techgatha.com")
                , "license", "licenseurl", Collections.emptyList());
    }
}
