package com.fitness.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.beans.Exercise;
import com.fitness.repository.ExerciseRepository;

@Service
public class ExerciseService {
	@Autowired
	ExerciseRepository exerciseRepository;
	public List<Exercise> getAllExercise(){
		return exerciseRepository.findAll();
	}
}
