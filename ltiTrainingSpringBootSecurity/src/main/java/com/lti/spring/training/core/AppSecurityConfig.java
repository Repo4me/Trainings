package com.lti.spring.training.core;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class AppSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private DataSource dataSource;
	
	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {

		auth.jdbcAuthentication().dataSource(dataSource)  
        .withDefaultSchema()
        .withUser(
        		User.withUsername("user").password("user").roles("MY")  
        )
        .withUser(  
        		User.withUsername("admin").password("admin").roles("ADMIN")  
        );  
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.headers().frameOptions().disable();  
        http.authorizeRequests()  
        .antMatchers("/emp").hasAnyRole("ADMIN","MY")  
        .antMatchers("/admin").hasRole("ADMIN")  
        .antMatchers("/**").permitAll().anyRequest()  
        .authenticated()
        .and()  
        .formLogin().and().csrf().disable();
		
	}
	
	@Bean
	public PasswordEncoder encoder() {
		return NoOpPasswordEncoder.getInstance();
	}
	
	// Hardcoded user password
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		
//		auth.inMemoryAuthentication()
//		//.withUser("admin").password("admin").roles("ADMIN")
//		.withUser("admin").password("{noop}admin").roles("ADMIN")
//		.and()
//		.withUser("emp").password("{noop}emp").roles("EMP"); // {noop} allows authentication witout any password encoding. security doesn't allow authentication without encryption.
////		.withUser("emp").password("emp").roles("EMP");
//		
//	}
	

	// Adding custome login form
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//
//		http.authorizeRequests()
//		.antMatchers("/").permitAll()
//		.antMatchers("/emp").hasAnyRole("EMP","ADMIN")
//		.antMatchers("/admin").hasAnyRole("ADMIN")
//		.antMatchers("/**").permitAll()
//		.anyRequest()
//		.authenticated()
//		.and()
//		.formLogin().loginPage("/login");
//		
//	}
	
	// Default login form
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//
//		http.authorizeRequests()
//		.antMatchers("/").permitAll()
//		.antMatchers("/emp").hasAnyRole("EMP","ADMIN")
////		.antMatchers("/admin").hasAnyRole("ADMIN")
//		.antMatchers("/**").permitAll()
//		.anyRequest()
//		.authenticated()
////		.antMatchers("/**").permitAll()
//		.and()
//		.formLogin();//.httpBasic()
//		
//	}
}
