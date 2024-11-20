package com.example.product.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.product.model.Product;
import com.example.product.service.ProductService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping("/saveProduct")
	public ResponseEntity<?>saveProduct(@RequestBody Product product){
		return  new ResponseEntity<>(productService.saveProduct(product),HttpStatus.CREATED);
	}
	
	@GetMapping("/All")
	public ResponseEntity<?>getAllProduct(){
		return  new ResponseEntity<>(productService.getAllProduct(),HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?>getProductById( @PathVariable Integer id){
		return  new ResponseEntity<>(productService.getProductById(id),HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteProduct/{id}")
	public ResponseEntity<?>deleteProduct( @PathVariable Integer id){
		return  new ResponseEntity<>(productService.deleteProduct(id),HttpStatus.OK);
				
	}
	
	@PutMapping("/editProduct/{id}")
	public ResponseEntity<?>editProduct(@RequestBody Product product, @PathVariable Integer id){
		return  new ResponseEntity<>(productService.editProduct( product ,id),HttpStatus.OK);
				
	}
	
	

}
