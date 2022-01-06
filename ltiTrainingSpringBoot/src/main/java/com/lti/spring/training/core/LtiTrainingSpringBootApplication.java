package com.lti.spring.training.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.lti.spring.training.core.profile.ProfileDemo;

@SpringBootApplication
public class LtiTrainingSpringBootApplication {

	
	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(LtiTrainingSpringBootApplication.class, args);
		
		ProfileDemo profileDemo = context.getBean(ProfileDemo.class);
		System.out.println("Active profile db Name - " + profileDemo.getDbname());
		
//		TopicService topicService = context.getBean(TopicService.class);
//		Topic t1 = new Topic(2, "pqr", "PQR");
//		Topic t2= new Topic(1, "abc", "ABC");
//		Topic t3 = new Topic(3, "xyz", "XYZ");
//		
//		topicService.insertTopic(t1);
//		topicService.insertTopic(t3);
//		topicService.deleteTopic(t2);
		
//		topicService.getAllTopics().stream().forEach(System.out::println);;
	}
	
}
