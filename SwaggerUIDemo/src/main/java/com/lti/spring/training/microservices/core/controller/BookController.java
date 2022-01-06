package com.lti.spring.training.microservices.core.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.spring.training.microservices.core.model.Book;

@RestController
@RequestMapping("/books")
public class BookController {

	@GetMapping("/{id}")
	public Book getBookById(@PathVariable String id) {
		return new Book(1, "Spring");
	}
	
	@PostMapping
	public Book createBook(@RequestBody Book book) {
		return book;
	}
}
