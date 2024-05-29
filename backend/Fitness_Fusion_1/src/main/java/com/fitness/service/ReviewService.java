package com.fitness.service;

import com.fitness.beans.Review;
import com.fitness.repository.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepo reviewRepo;

    public Review addReview(Review review) {
        return reviewRepo.save(review);
    }

    public Optional<Review> getReviewById(Long reviewId) {
        return reviewRepo.findById(reviewId);
    }

    public List<Review> getAllReviews() {
        return reviewRepo.findAll();
    }

    public List<Review> getReviewsByUserId(Long userId) {
        return reviewRepo.findAllByUserId(userId);
    }
}
