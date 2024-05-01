package com.example.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.common.DifficultyLevel;
import com.example.app.services.ExerciseService;
import com.fitness_fusion.model.Exercise;


@RestController
@RequestMapping("/api/exercises")
public class ExerciseController {

    @Autowired
    private ExerciseService exerciseService;

    @GetMapping
    public List<Exercise> getExercises(@RequestParam(required = false) DifficultyLevel difficulty) {
        if (difficulty != null) {
            return exerciseService.getExercisesByDifficulty(difficulty);
        } else {
            return exerciseService.getAllExercises();
        }
    }
}
