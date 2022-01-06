package com.lti.spring.training.microservices.core.model;

public class UserCatalog {

	private String email;
	private String booktitle;
	private String bookdesc;
	private String orderdate;
	
	public UserCatalog() {
		// TODO Auto-generated constructor stub
	}

	public UserCatalog(String email, String booktitle, String bookdesc) {
		super();
		this.email = email;
		this.booktitle = booktitle;
		this.bookdesc = bookdesc;
	}
	
	public String getOrderdate() {
		return orderdate;
	}

	public void setOrderdate(String orderdaet) {
		this.orderdate = orderdate;
	}

	public UserCatalog(String email, String booktitle, String bookdesc, String orderdate) {
		super();
		this.email = email;
		this.booktitle = booktitle;
		this.bookdesc = bookdesc;
		this.orderdate = orderdate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBooktitle() {
		return booktitle;
	}

	public void setBooktitle(String booktitle) {
		this.booktitle = booktitle;
	}

	public String getBookdesc() {
		return bookdesc;
	}

	public void setBookdesc(String bookdesc) {
		this.bookdesc = bookdesc;
	}

	@Override
	public String toString() {
		return "UserCatalog [email=" + email + ", booktitle=" + booktitle + ", bookdesc=" + bookdesc + "]";
	}
	
}
