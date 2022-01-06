package com.lti.demos.model;

import lombok.ToString;

@ToString
public class UserCatalog {

	private String email;
	private String booktitle;
	private String bookdesc;
	private String datetime;
	
	public UserCatalog() {
		// TODO Auto-generated constructor stub
	}
	
	public UserCatalog(String email, String booktitle, String bookdesc, String datetime) {
		super();
		this.email = email;
		this.booktitle = booktitle;
		this.bookdesc = bookdesc;
		this.datetime = datetime;
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

	public String getDatetime() {
		return datetime;
	}

	public void setDatetime(String datetime) {
		this.datetime = datetime;
	}

	@Override
	public String toString() {
		return "UserCatalog [email=" + email + ", booktitle=" + booktitle + ", bookdesc=" + bookdesc + ", datetime="
				+ datetime + "]";
	}
		
}
