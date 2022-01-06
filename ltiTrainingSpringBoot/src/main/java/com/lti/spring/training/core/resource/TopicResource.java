package com.lti.spring.training.core.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.lti.spring.training.core.model.Topic;
import com.lti.spring.training.core.service.TopicService;

@RestController
@RequestMapping("/topics")
public class TopicResource {
	
	@Autowired
	private TopicService topicService;

	@GetMapping("/{id}")
	public Topic getTopic(@PathVariable("id") Integer topicId) {
		return topicService.getTopicById(topicId);
	}
	
	@PostMapping(consumes = {"application/json", "application/xml"})
	@ResponseStatus(code = HttpStatus.CREATED)
	public Topic addTopic(@RequestBody Topic topic) {
		return topicService.insertTopic(topic);
	}
	
	@PutMapping
	public Topic updateTopic(@RequestBody Topic topic) {
		return topicService.updateTopic(topic);
	}
	
	@DeleteMapping
	public String deleteTopic(@RequestBody Topic topic) {
		topicService.deleteTopic(topic);
		return "Deleted succefully";
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable Integer id) {
		
		ResponseEntity<String> entity = null;
		
		if(topicService.deleteTopic(id))
			entity = new ResponseEntity<String>("Deleted", HttpStatus.ACCEPTED);
		else 
			entity = new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		return entity;
	}
	
	@GetMapping(produces = {"application/json", "application/xml"})
	public List<Topic> getAllTopic() {
		return topicService.getAllTopics();
	}
}
