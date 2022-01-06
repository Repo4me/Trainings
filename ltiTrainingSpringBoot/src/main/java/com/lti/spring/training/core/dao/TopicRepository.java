package com.lti.spring.training.core.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lti.spring.training.core.model.Topic;

@Repository
public interface TopicRepository extends CrudRepository<Topic, Integer> {

}
