package com.fitness.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fitness.beans.Product;
import com.fitness.beans.User;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	public Optional<Product> findById(Long id);
}