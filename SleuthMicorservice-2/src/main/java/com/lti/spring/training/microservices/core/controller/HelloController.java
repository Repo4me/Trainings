package com.lti.spring.training.microservices.core.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	@RequestMapping("/ms2")
	public String hello() {
		System.out.println("Inside ms2 hello");
		log.info("ms2");
		return "from ms2, Hello !!!";
	}
}
