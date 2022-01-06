package com.lti.demos.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.lti.demos.model.Book;
import com.lti.demos.model.BookMailOrderResponse;
import com.lti.demos.model.BookOrderResponseWrapper;
import com.lti.demos.model.UserCatalog;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@Service
public class BookCatalogService_WithFeignClient {
	
	
	@Autowired
	private BookOrderFeign bookMailingOrderFeign;
	
	@Autowired
	private BookServiceFeign bookServiceFeign;
	
	
	@HystrixCommand(fallbackMethod = "catalogFallback") 
	// The signature of the method should be exact as the method on with the annotation is used
	// Other methods are not configured with circuit breaker, so in case other service goes down, those methods will fail and will not return default data.
	public List<UserCatalog> catalog(@PathVariable String email) 
	{

		List<String> bookids = bookMailingOrderFeign.getBookIds(email);

		List<UserCatalog> catalogs = bookids.stream().map(bookid -> {
			
			Book b1 = bookServiceFeign.getBookById(bookid);
			UserCatalog catalog = new UserCatalog(email, b1.getTitle(), b1.getDescription(), null);
			
			return catalog;
			
		}).collect(Collectors.toList());
		 
		 return catalogs;
	}
	
	public List<UserCatalog> catalogFallback(String email) {
		
		UserCatalog catalog = new UserCatalog("","","","");
		
		return Arrays.asList(catalog);
	}
	
	public List<UserCatalog> catalogWithDate(@PathVariable String email)
	{
		List<BookMailOrderResponse> bookorderresponses = bookMailingOrderFeign.getBookIdsWithDate(email);

		System.out.println(bookorderresponses);

		return bookorderresponses.stream().map(bookorderresponse -> {

			Book b1 = bookServiceFeign.getBookById(bookorderresponse.getBookid());
			UserCatalog catalog = new UserCatalog(email, b1.getTitle(), b1.getDescription(),
					bookorderresponse.getOrderdate());

			return catalog;

		}).collect(Collectors.toList());
	}
	
	public List<UserCatalog> catalogWithWrapper(String email) {
		
		BookOrderResponseWrapper wrapper = bookMailingOrderFeign.getCatalogWithWrapper(email);
		
		List<UserCatalog> catalogs = new ArrayList<UserCatalog>();
		for(BookMailOrderResponse bookwrapper:wrapper.getBookspurchased())
		{
			Book b1 = bookServiceFeign.getBookById(bookwrapper.getBookid());
			UserCatalog catalog = new UserCatalog();  
			catalog.setBookdesc(b1.getDescription());
			catalog.setBooktitle(b1.getTitle());
			catalog.setDatetime(bookwrapper.getOrderdate());
			catalog.setEmail(email);
			catalogs.add(catalog);	
		}
		return catalogs;
	}
}
