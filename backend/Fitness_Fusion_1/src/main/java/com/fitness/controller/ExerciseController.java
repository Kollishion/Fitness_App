package com.fitness.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fitness.beans.Exercise;
import com.fitness.service.ExerciseService;

@RestController
@RequestMapping("/exercises")
@CrossOrigin(origins="http://localhost:3000")
public class ExerciseController {
	@Autowired
	ExerciseService exerciseService;
	@GetMapping(value="/getAll")
	public List<Exercise> getAllExercises(){
		return exerciseService.getAllExercise();
	}
}
