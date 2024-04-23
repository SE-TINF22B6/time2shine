package com.backend2shine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Backend2shineApplication {

	public static void main(String[] args) {
		SpringApplication app =  new SpringApplication(Backend2shineApplication.class);

		app.run(args);
	}

}
