package com.fitness.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fitness.beans.Exercise;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {

}
