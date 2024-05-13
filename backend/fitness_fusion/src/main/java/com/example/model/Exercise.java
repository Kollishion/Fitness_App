package com.example.model;

import com.example.app.common.DifficultyLevel;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "exercises")
public class Exercise {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    private String title;
    private String imageUrl;
    private String instructions;
    @Enumerated(EnumType.STRING)
    private DifficultyLevel difficultyLevel;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getInstructions() {
		return instructions;
	}
	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}
	public DifficultyLevel getDifficultyLevel() {
		return difficultyLevel;
	}
	public void setDifficultyLevel(DifficultyLevel difficultyLevel) {
		this.difficultyLevel = difficultyLevel;
	}
}
