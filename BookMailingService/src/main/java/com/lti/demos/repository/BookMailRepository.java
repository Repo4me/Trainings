package com.lti.demos.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.lti.demos.model.BookMailOrder;

public interface BookMailRepository extends CrudRepository<BookMailOrder, Integer>{

	public List<BookMailOrder> findByEmail(String email);
}
