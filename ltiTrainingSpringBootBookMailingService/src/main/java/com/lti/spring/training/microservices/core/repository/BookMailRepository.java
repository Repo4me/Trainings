package com.lti.spring.training.microservices.core.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lti.spring.training.microservices.core.model.BookMailOrder;

@Repository
public interface BookMailRepository extends CrudRepository<BookMailOrder, Integer>{

	public List<BookMailOrder> findByEmail(String emial);
}
