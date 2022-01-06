package com.lti.demos.model;

import java.util.List;

public class BookOrderResponseWrapper {
	private String email;
	private List<BookMailOrderResponse> bookspurchased;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public List<BookMailOrderResponse> getBookspurchased() {
		return bookspurchased;
	}
	public void setBookspurchased(List<BookMailOrderResponse> bookspurchased) {
		this.bookspurchased = bookspurchased;
	}
	
}
