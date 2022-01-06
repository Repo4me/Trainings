package com.lti.spring.training.microservices.core.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BookMailOrder {

	@Id
	private int orderno;
	private String email;
	private String bookid;
	private String date;
	
	public BookMailOrder() {
		// TODO Auto-generated constructor stub
	}
	
	public BookMailOrder(int orderno, String email, String bookid, String date) {
		this.orderno = orderno;
		this.email = email;
		this.bookid = bookid;
		this.date = date;
	}

	public int getOrderno() {
		return orderno;
	}

	public void setOrderno(int orderno) {
		this.orderno = orderno;
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
		return "BookMailOrder [orderno=" + orderno + ", email=" + email + ", bookid=" + bookid + ", date=" + date + "]";
	}
	
	
}
