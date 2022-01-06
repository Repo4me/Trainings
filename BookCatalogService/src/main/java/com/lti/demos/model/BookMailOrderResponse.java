package com.lti.demos.model;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

public class BookMailOrderResponse {

	private String bookid;
	private String orderdate;
	
	public BookMailOrderResponse() {
		// TODO Auto-generated constructor stub
	}
	
	public BookMailOrderResponse(String bookid, String orderdate) {
		super();
		this.bookid = bookid;
		this.orderdate = orderdate;
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
		return "BookMailOrderResponse [bookid=" + bookid + ", orderdate=" + orderdate + "]";
	}
}
