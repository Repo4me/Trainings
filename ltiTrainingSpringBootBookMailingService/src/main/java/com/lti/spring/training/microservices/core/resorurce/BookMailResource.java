package com.lti.spring.training.microservices.core.resorurce;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.spring.training.microservices.core.model.BookMailOrder;
import com.lti.spring.training.microservices.core.model.BookMailOrderResponse;
import com.lti.spring.training.microservices.core.model.BookOrderResponseWrapper;
import com.lti.spring.training.microservices.core.repository.BookMailRepository;

@RestController
@RequestMapping("/orders")
public class BookMailResource {

	@Autowired
	private BookMailRepository mailRepository;
	
	@GetMapping("/{email}")
	public List<String> purchaseBook(@PathVariable String email) {
		
		List<BookMailOrder> orders = mailRepository.findByEmail(email);
		
		return orders.stream().map(order -> {
			return order.getBookid();
		}).collect(Collectors.toList());
	}
	
	@GetMapping("/date//{email}")
	public List<BookMailOrderResponse> purchaseBookWithDate(@PathVariable String email) {
		
		return mailRepository.findByEmail(email).stream().map(book -> 
		{
			return new BookMailOrderResponse(email, book.getBookid(), book.getDate());
		}
		).collect(Collectors.toList());
		
	}
	
	@GetMapping("/wrapper/{email}")
	public BookOrderResponseWrapper purchaseBookWithOrderDate(@PathVariable String email) {
	
		List<BookMailOrderResponse> books = new ArrayList<BookMailOrderResponse>();
		
		books = mailRepository.findByEmail(email)
				.stream().map(order -> {
					BookMailOrderResponse response = new BookMailOrderResponse();
					response.setBookid(order.getBookid());
					response.setDate(order.getDate());
					return response;
				}).collect(Collectors.toList());
		
		BookOrderResponseWrapper responseWrapper = new BookOrderResponseWrapper();
		responseWrapper.setEmail(email);
		responseWrapper.setBookPurchased(books);
		
		return responseWrapper;
	}
}
