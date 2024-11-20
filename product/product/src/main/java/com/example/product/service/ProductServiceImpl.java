package com.example.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.product.model.Product;
import com.example.product.repo.ProductServiceRepo;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductServiceRepo productServiceRepo;

	@Override
	public Product saveProduct(Product product) {
		return productServiceRepo.save(product);
	}

	@Override
	public List<Product> getAllProduct() {
		return productServiceRepo.findAll();
	}

	@Override
	public Product getProductById(Integer id) {
		return productServiceRepo.findById(id).get();
	}

	@Override
	public String deleteProduct(Integer id) {
		Product product = productServiceRepo.findById(id).get();
		if (product != null) {
			productServiceRepo.delete(product);
			return "Product deleted Successfully";
		}

		return "Somthing Roungh of server";

	}

	@Override
	public Product editProduct(Product product, Integer id) {
		Product old=productServiceRepo.findById(id).get();
		old.setDescription(product.getDescription());
		old.setPrice(product.getPrice());
		old.setProductName(product.getProductName());
		old.setStatus(product.getStatus());
		return productServiceRepo.save(old);
	}

}
