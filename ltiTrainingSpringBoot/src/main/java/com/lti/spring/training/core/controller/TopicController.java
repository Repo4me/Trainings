package com.lti.spring.training.core.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lti.spring.training.core.model.Topic;

@Controller
public class TopicController {

	@RequestMapping("/greet")
	public @ResponseBody String greet() {
		return "Hello World!";
	}
	
	@RequestMapping("/")
	public String display() {
		return "index";
	}
	
	@RequestMapping("/add")
	public @ResponseBody String addTopic(Topic topic) {
		return "Topic added "+ topic;
	}
}
