package com.lti.spring.training.microservices.core.resource;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.lti.spring.training.microservices.core.model.Book;
import com.lti.spring.training.microservices.core.model.BookMailOrderResponse;
import com.lti.spring.training.microservices.core.model.BookOrderResponseWrapper;
import com.lti.spring.training.microservices.core.model.UserCatalog;

@RestController
@RequestMapping("/catalog")
public class BookCatalogResource {

	private String url = "http://localhost:8083/orders/";
	
	@RequestMapping("/{email}")
	public List<UserCatalog> getCatalog(@PathVariable String email) {
		
		RestTemplate restTemplate = new RestTemplate();
		List<String> bookIds = restTemplate.getForObject(url+email, List.class);
		System.out.println(bookIds);
		return bookIds.stream().map(bookid -> {
			Book book = restTemplate.getForObject("http://localhost:8081/books/" + bookid, Book.class);
			UserCatalog userCatalog = new UserCatalog(email, book.getTitle(), book.getDescription());
			return userCatalog;
			}).collect(Collectors.toList());
	}
	

	@GetMapping("/date/{email}")
    public List<UserCatalog> catalogWithDate(@PathVariable String email)
    {
            RestTemplate template = new RestTemplate();
            
            // http://localhost:8083/orders/date/{email}    
            ResponseEntity<List<BookMailOrderResponse>> response =
                    template.exchange(url+"date/"+email,HttpMethod.GET, null, new ParameterizedTypeReference<List<BookMailOrderResponse>>() {
                    });
            List<BookMailOrderResponse> bookorderresponses = response.getBody();
            
            System.out.println(bookorderresponses);
            
            return bookorderresponses.stream().map(bookorderresponse -> {
                Book b1 = 
        template.exchange("http://localhost:8081/books/"+bookorderresponse.getBookid()
        ,HttpMethod.GET, null, Book.class).getBody();
                UserCatalog catalog = new UserCatalog(email, b1.getTitle(), b1.getDescription(),bookorderresponse.getOrderdate());  
                        return catalog;
            }).collect(Collectors.toList());
    }
	
	@GetMapping("/wrapper/{email}")
    public List<UserCatalog> catalogWithOrderDate(@PathVariable String email)
    {
		RestTemplate template = new RestTemplate();
        
        // http://localhost:8083/orders/wrapper/{email}    
        BookOrderResponseWrapper wrapper =
                template.getForObject(url+"wrapper/"+email, BookOrderResponseWrapper.class);
        
        List<UserCatalog> catalogs = new ArrayList<UserCatalog>();
        for(BookMailOrderResponse bookwrapper:wrapper.getBookPurchased())
        {
            Book b1 = 
                    template.getForObject("http://localhost:8081/books/"+bookwrapper.getBookid(), Book.class);
            UserCatalog catalog = new UserCatalog();  
            catalog.setBookdesc(b1.getDescription());
            catalog.setBooktitle(b1.getTitle());
            catalog.setOrderdate(bookwrapper.getOrderdate());
            catalog.setEmail(email);
            catalogs.add(catalog);    
        }
        return catalogs;
		
    }
	
}
