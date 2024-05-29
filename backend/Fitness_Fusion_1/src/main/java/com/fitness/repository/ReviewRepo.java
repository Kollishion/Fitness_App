package com.fitness.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fitness.beans.Review;

@Repository
public interface ReviewRepo extends JpaRepository<Review, Long> {
	List<Review> findAllByUserId(Long userId);
}