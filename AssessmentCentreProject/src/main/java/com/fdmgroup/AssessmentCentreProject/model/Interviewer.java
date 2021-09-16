package com.fdmgroup.AssessmentCentreProject.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Interviewer extends Staff {
	
	// ONE interviewer TO MANY responses
	@OneToMany  (cascade=CascadeType.ALL, mappedBy="interviewer")
	@JsonIgnore
	private List<AssessmentCentreResponse> responses;
	
	// CONSTRUCTOR
	public Interviewer() {
		super();
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
