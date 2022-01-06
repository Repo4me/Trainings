package com.lti.spring.training.core.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	
	@RequestMapping("/")  
    public String greet() {  
        return "<h1>WELCOME</h1>";  
    }  
    @RequestMapping("/emp")  
    public String user() {  
        return "<h1>WELCOME EMPLOYEE....</h1>";  
    }  
    @RequestMapping("/admin")  
    public String admin() {  
        return "<h1>WELCOME ADMIN.....</h1>";  
    }
}
