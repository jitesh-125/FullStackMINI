package com.example.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//1111
@SpringBootApplication
public class ProductApplication {

	public static void main(String[] args) {
		System.out.println("MiniProduct...");
		SpringApplication.run(ProductApplication.class, args);
	}

}
