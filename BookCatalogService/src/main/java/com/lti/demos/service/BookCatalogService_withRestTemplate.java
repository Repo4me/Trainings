package com.lti.demos.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

import com.lti.demos.model.Book;
import com.lti.demos.model.BookMailOrderResponse;
import com.lti.demos.model.UserCatalog;

@Service
public class BookCatalogService_withRestTemplate {
	
	private String bookMailingServiceURL = "http://book-mailing-service/orders/";
	private String bookServiceURL = "http://book-service/books/";

	@Autowired
	private RestTemplate template;
	
	public List<UserCatalog> catalog(@PathVariable String email)
	{
		
			List<String> bookids = template.getForObject(bookMailingServiceURL+email, List.class);
			
			
			return bookids.stream().map(bookid -> {
				Book b1 = template.getForObject(bookServiceURL+bookid, Book.class);
				UserCatalog catalog = new UserCatalog(email, b1.getTitle(), b1.getDescription(),null);  
						return catalog;
			}).collect(Collectors.toList());
	}
	
	public List<UserCatalog> catalogWithDate(@PathVariable String email)
	{
			ResponseEntity<List<BookMailOrderResponse>> response =
					template.exchange(bookMailingServiceURL+"date/"+email,HttpMethod.GET, null, new ParameterizedTypeReference<List<BookMailOrderResponse>>() {
					});
			List<BookMailOrderResponse> bookorderresponses = response.getBody();
			
			System.out.println(bookorderresponses);
			
			return bookorderresponses.stream().map(bookorderresponse -> {
				Book b1 = 
		template.exchange(bookServiceURL+bookorderresponse.getBookid()
		,HttpMethod.GET, null, Book.class).getBody();
				UserCatalog catalog = new UserCatalog(email, b1.getTitle(), b1.getDescription(),bookorderresponse.getOrderdate());  
						return catalog;
			}).collect(Collectors.toList());
	}
}
