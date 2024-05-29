package com.fitness.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fitness.beans.UserOrderDetails;

@Repository
public interface UserOrderDetailsRepo extends JpaRepository<UserOrderDetails, Integer> {
    Optional<UserOrderDetails> findByUserId(Integer userId);
}
