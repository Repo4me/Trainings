package com.lti.demos.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BookMailOrder {

	@Id
	private int ordeno;
	private String email;
	private String bookid;
	private String orderdate;
	
	public BookMailOrder() {
		// TODO Auto-generated constructor stub
	}
	
	public BookMailOrder(int ordeno, String email, String bookid, String orderdate) {
		super();
		this.ordeno = ordeno;
		this.email = email;
		this.bookid = bookid;
		this.orderdate = orderdate;
	}

	public int getOrdeno() {
		return ordeno;
	}

	public void setOrdeno(int ordeno) {
		this.ordeno = ordeno;
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

	public String getOrderdate() {
		return orderdate;
	}

	public void setOrderdate(String orderdate) {
		this.orderdate = orderdate;
	}

	@Override
	public String toString() {
		return "BookMailOrder [ordeno=" + ordeno + ", email=" + email + ", bookid=" + bookid + ", orderdate="
				+ orderdate + "]";
	}
	
}
