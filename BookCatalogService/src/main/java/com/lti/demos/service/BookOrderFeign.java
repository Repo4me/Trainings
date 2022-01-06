package com.lti.demos.service;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.lti.demos.model.BookMailOrderResponse;
import com.lti.demos.model.BookOrderResponseWrapper;

@FeignClient(name = "BOOK-MAILING-SERVICE")
public interface BookOrderFeign {

	
	
	@GetMapping("/orders/{email}")
    public List<String> getBookIds(@PathVariable String email);
	
    @GetMapping("/orders/date/{email}")
    public List<BookMailOrderResponse> getBookIdsWithDate(@PathVariable String email);
    
    @GetMapping("/orders/wrapper/{email}")
    public BookOrderResponseWrapper getCatalogWithWrapper(@PathVariable String email);
}
