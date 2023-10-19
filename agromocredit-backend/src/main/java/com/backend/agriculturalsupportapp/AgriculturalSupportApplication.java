package com.backend.agriculturalsupportapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class AgriculturalSupportApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgriculturalSupportApplication.class, args);
	}

}
