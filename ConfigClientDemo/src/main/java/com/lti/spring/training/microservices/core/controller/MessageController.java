package com.lti.spring.training.microservices.core.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

	@Value("${msg: Config not working - please check}")
    private String message;
    
    @RequestMapping("/message")
    public String message()
    {
        return this.message;
    }
	
}
