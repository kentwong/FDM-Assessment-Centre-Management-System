package com.fdmgroup.AssessmentCentreProject.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Interviewer extends Staff {
	
//	@ManyToMany
//	@JoinTable(name = "question_bank",
//		joinColumns = { @JoinColumn(name="fk_interviewer_id")},
//		inverseJoinColumns = { @JoinColumn(name="fk_question_id") }
//	)
//	private List<Question> questions;
	
	
	// ONE interviewer TO MANY responses
	@OneToMany
	private List<AssessmentCentreResponse> responses;
	
	// CONSTRUCTOR
	public Interviewer() {
		super();
	}

	// BEHAVIOURS
	public void chooseQuestion() {
		
	}
	
	public void uploadScore(double score) {
		
	}

	// GETTERS & SETTERS
//	public List<Question> getQuestions() {
//		return questions;
//	}
//
//	public void setQuestions(List<Question> questions) {
//		this.questions = questions;
//	}

	public List<AssessmentCentreResponse> getResponses() {
		return responses;
	}

	public void setResponses(List<AssessmentCentreResponse> responses) {
		this.responses = responses;
	}

	
	
}
