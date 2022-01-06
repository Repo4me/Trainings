package com.lti.spring.training.microservices.core.model;

import java.util.List;

public class BookOrderResponseWrapper {

	private String email;
	private List<BookMailOrderResponse> bookPurchased;
	
	public BookOrderResponseWrapper() {
		// TODO Auto-generated constructor stub
	}

	
	public BookOrderResponseWrapper(String email, List<BookMailOrderResponse> bookPurchased) {
		super();
		this.email = email;
		this.bookPurchased = bookPurchased;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<BookMailOrderResponse> getBookPurchased() {
		return bookPurchased;
	}

	public void setBookPurchased(List<BookMailOrderResponse> bookPurchased) {
		this.bookPurchased = bookPurchased;
	}
	
	
}
