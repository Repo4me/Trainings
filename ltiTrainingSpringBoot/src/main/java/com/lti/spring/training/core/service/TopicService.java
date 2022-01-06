package com.lti.spring.training.core.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.spring.training.core.dao.TopicRepository;
import com.lti.spring.training.core.model.Topic;

@Service
public class TopicService {

	@Autowired
	private TopicRepository topicRepository;
	
	public Topic getTopicById(Integer topicId) {
	
		Optional<Topic> topic = topicRepository.findById(topicId);
		if(topic.isPresent()) {
			return topic.get();
		}
		return null;
	}
	
	public Topic insertTopic(Topic topic) {
		return topicRepository.save(topic);
	}
	
	public Topic updateTopic(Topic topic) {
		return topicRepository.save(topic);
	}
	
	public void deleteTopic(Topic topic) {
		topicRepository.delete(topic);
	}
	
	public boolean deleteTopic(int id)  
    {  
        if(topicRepository.existsById(id))  
        {  
            topicRepository.deleteById(id);  
            return true;  
        }  
        return false;  
    }
	
	
	  public List<Topic> getAllTopics() {
	  
		  List<Topic> topics = new ArrayList<Topic>();
		  
		  topicRepository.findAll().forEach(topics::add);;
		  
		  return topics; 
	  }
	 
		// TopicRepository
		// insert
		// update
		//delete
		//getALltopics
		// gettopicbyid
}
