package com.lti.spring.training.core.health;

import java.net.URL;
import java.net.URLConnection;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

@Component
public class CheckInternetHealth implements HealthIndicator {

	@Override
	public Health health() {

		return checkInternet()? Health.up().withDetail("connect status", "Connected to Internet").build()  
                :Health.down().withDetail("connect status", "NOT Connected to Internet").build();
		
	}
	
	private boolean checkInternet()  
    {  
        boolean flag = false;  
        try {  
            URL url = new URL("http://www.google.com");  
            URLConnection con = url.openConnection();  
            con.connect();  
            flag = true;  
        }  
        catch(Exception e)  
        {  
            return flag;  
        }  
        return true;  
    }
}
