package com.fitness.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fitness.beans.Exercise;
import com.fitness.service.ExerciseService;

@RestController
@RequestMapping("/exercises")
@CrossOrigin(origins = "http://localhost:3000")
public class ExerciseController {
    @Autowired
    private ExerciseService exerciseService;

    @Autowired
    private WorkoutService workoutService;

    @GetMapping(value = "/getAll")
    public List<Exercise> getAllExercises() {
        return exerciseService.getAllExercise();
    }

    @GetMapping(value = "/generateWorkout/{level}/{program}")
    public List<Exercise> generateWorkout(@PathVariable String level, @PathVariable String program) {
        // Call the workout service to generate the workout based on the provided level and program type
        List<Exercise> workout = workoutService.generateWorkout(level, program);
        return workout;
    }
}
