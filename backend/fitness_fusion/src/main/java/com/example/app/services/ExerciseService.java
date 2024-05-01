package com.example.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.app.common.DifficultyLevel;
import com.example.app.repositories.ExerciseRepository;
import com.fitness_fusion.model.Exercise;

@Service
public class ExerciseService {

    @Autowired
    private ExerciseRepository exerciseRepository;

    public List<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }

    public List<Exercise> getExercisesByDifficulty(DifficultyLevel difficulty) {
        return exerciseRepository.findByDifficultyLevel(difficulty);
    }
}

