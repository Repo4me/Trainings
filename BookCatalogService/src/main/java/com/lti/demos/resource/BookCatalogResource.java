package com.lti.demos.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.demos.model.UserCatalog;
import com.lti.demos.service.BookCatalogService_WithFeignClient;


@RestController
@RequestMapping("/catalog")
public class BookCatalogResource {

	
	@Autowired
	private BookCatalogService_WithFeignClient service;
	
	@GetMapping("/{email}")
	public List<UserCatalog> catalog(@PathVariable String email)
	{
		
		return service.catalog(email);
	}

	@GetMapping("/date/{email}")
	public List<UserCatalog> catalogWithDate(@PathVariable String email)
	{
		
		return service.catalogWithDate(email);
	}
	
	@GetMapping("/wrapper/{email}")
	public List<UserCatalog> catalogWithWrapper(@PathVariable String email)
	{
			
		return service.catalogWithWrapper(email);
	}
}
