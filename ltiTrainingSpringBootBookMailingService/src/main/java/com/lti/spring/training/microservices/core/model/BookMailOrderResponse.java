package com.lti.spring.training.microservices.core.model;

public class BookMailOrderResponse {

	private String email;
	private String bookid;
	private String date;
	
	public BookMailOrderResponse() {
		// TODO Auto-generated constructor stub
	}
	
	public BookMailOrderResponse(String email, String bookid, String date) {
		this.email = email;
		this.bookid = bookid;
		this.date = date;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBookid() {
		return bookid;
	}

	public void setBookid(String bookid) {
		this.bookid = bookid;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "BookMailOrder [email=" + email + ", bookid=" + bookid + ", date=" + date + "]";
	}
	
	
}
