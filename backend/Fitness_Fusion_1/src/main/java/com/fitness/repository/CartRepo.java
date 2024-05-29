package com.fitness.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fitness.beans.UserCart;

@Repository
public interface CartRepo extends JpaRepository<UserCart, Integer> {
}