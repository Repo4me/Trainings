package com.lti.spring.training.core.health;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

@Component
public class AnotherHealCheck implements HealthIndicator {

	@Override
	public Health health() {
		
		if(checkInternet() % 2 == 0)
		{
			return Health.up().withDetail("connect status", "Connected to Internet").build();  
		} else {
			return Health.down().withDetail("connect status", "NOT Connected to Internet").build();
		}
		
	}
	
	private Double checkInternet()  
    {  
        return Math.random();
    }
}
