package com.backend2shine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Collections;

@SpringBootApplication
public class Backend2shineApplication {

	public static void main(String[] args) {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		String pwd = bCryptPasswordEncoder.encode("password");
		System.out.println(pwd);
		SpringApplication.run(Backend2shineApplication.class, args);



//		SpringApplication app =  new SpringApplication(Backend2shineApplication.class);
//
//		app.run(args);
	}

}
