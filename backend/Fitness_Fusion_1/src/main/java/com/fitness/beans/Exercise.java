package com.fitness.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="exercise")
public class Exercise {
	@Id
	@Column(name="id")
	private Long id;
	@Column(name="title")
	private String title;
	@Column(name="imageurl")
	private String imageUrl;
	@Column(name="instructions")
	private String instructions;
	@Column(name="difficultylevel")
	private String difficultyLevel;
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
	public String getDifficultyLevel() {
		return difficultyLevel;
	}
	public void setDifficultyLevel(String difficultyLevel) {
		this.difficultyLevel = difficultyLevel;
	}
	public Exercise() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Exercise(Long id, String title, String imageUrl, String instructions, String difficultyLevel) {
		super();
		this.id = id;
		this.title = title;
		this.imageUrl = imageUrl;
		this.instructions = instructions;
		this.difficultyLevel = difficultyLevel;
	}
	@Override
	public String toString() {
		return "Exercise [id=" + id + ", title=" + title + ", imageUrl=" + imageUrl + ", instructions=" + instructions
				+ ", difficultyLevel=" + difficultyLevel + "]";
	}
	
}
