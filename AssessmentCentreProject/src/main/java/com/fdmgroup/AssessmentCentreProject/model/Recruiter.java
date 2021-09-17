package com.fdmgroup.AssessmentCentreProject.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Recruiter extends Staff {
	
	@OneToMany(mappedBy="recruiter")
	@JsonManagedReference
	private List<Candidate> candidates;
	
	// CONSTRUCTOR
	public Recruiter() {
		super();
	}

	// GETTERS & SETTERS
	public List<Candidate> getCandidates() {
		return candidates;
	}

	public void setCandidates(List<Candidate> candidates) {
		this.candidates = candidates;
	}

	@Override
	public String toString() {
		return "Recruiter [candidates=" + candidates + "]";
	}
	
	
}
