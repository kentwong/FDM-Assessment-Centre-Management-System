package com.fdmgroup.AssessmentCentreProject.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
public class Interviewer extends Staff {
	
	// ONE interviewer TO MANY responses
	@OneToMany
	private List<AssessmentCentreResponse> responses;
	
	// CONSTRUCTOR
	public Interviewer() {
		super();
	}

	// BEHAVIOURS *
	public void chooseQuestion() {
		
	}
	
	public void uploadResponse(AssessmentCentreResponse response) {
		
	}

	// GETTERS & SETTERS
	public List<AssessmentCentreResponse> getResponses() {
		return responses;
	}

	public void setResponses(List<AssessmentCentreResponse> responses) {
		this.responses = responses;
	}

	@Override
	public String toString() {
		return "Interviewer [responses=" + responses + "]";
	}
	
}
