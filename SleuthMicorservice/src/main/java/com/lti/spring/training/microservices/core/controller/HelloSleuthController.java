package com.lti.spring.training.microservices.core.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class HelloSleuthController {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private RestTemplate template;
	
	@RequestMapping("/ms1")
	public String hello() {
		System.out.println("Inside ms1 hello");
		log.info("ms1");
        return "from ms1 "+template.getForEntity("http://localhost:8081/ms2", String.class).getBody();
//		return "from ms1, Hello !!!";
	}
}
