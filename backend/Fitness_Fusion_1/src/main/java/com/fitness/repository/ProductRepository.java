package com.fitness.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fitness.beans.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}