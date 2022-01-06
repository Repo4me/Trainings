package com.lti.demos.resource;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.demos.model.BookMailOrder;
import com.lti.demos.model.BookMailOrderResponse;
import com.lti.demos.model.BookOrderResponseWrapper;
import com.lti.demos.repository.BookMailRepository;

@RestController
@RequestMapping("/orders")

public class BookMailResource {

	@Autowired
	private BookMailRepository repository;
	
	@GetMapping("/{email}")
	public List<String> purchasedBook(@PathVariable String email)
	{
		 List<BookMailOrder> orders = 
				 repository.findByEmail(email);
		 return orders.stream().map(order->{
			 return order.getBookid();
		 }).collect(Collectors.toList());
	}
	
	@GetMapping("/date/{email}")
	public List<BookMailOrderResponse> purchasedBookWithDate(@PathVariable String email)
	{
		return repository.findByEmail(email)
				.stream().map(order->{
					BookMailOrderResponse response = new BookMailOrderResponse();
					response.setBookid(order.getBookid());
					response.setOrderdate(order.getOrderdate());
					return response;
				}).collect(Collectors.toList());
	}
	
	@GetMapping("/wrapper/{email}")
	public BookOrderResponseWrapper purchasedBookWithWrapper(@PathVariable String email)
	{
		 List<BookMailOrderResponse> books = new ArrayList<BookMailOrderResponse>();
		 books = repository.findByEmail(email)
				.stream().map(order->{
					BookMailOrderResponse response = new BookMailOrderResponse();
					response.setBookid(order.getBookid());
					response.setOrderdate(order.getOrderdate());
					return response;
				}).collect(Collectors.toList());
		 BookOrderResponseWrapper wrapper = new BookOrderResponseWrapper();
		 wrapper.setEmail(email);
		 wrapper.setBookspurchased(books);
		 return wrapper;
	}
}
