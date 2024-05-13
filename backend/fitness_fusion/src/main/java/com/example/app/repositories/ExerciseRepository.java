package com.example.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.app.common.DifficultyLevel;
import com.example.model.Exercise; 
import java.util.List;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    // Find all exercises
    List<Exercise> findAll();

    // Find exercises by difficulty level
    List<Exercise> findByDifficultyLevel(DifficultyLevel difficulty);
}
