package com.fdmgroup.AssessmentCentreProject.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
public class Recruiter extends Staff {
	
	@OneToMany(mappedBy="recruiter")
	private List<Candidate> candidates;
	
	// CONSTRUCTOR
	public Recruiter() {
		super();
	}

	// BEHAVIOURS *
	public void recruit(Candidate candidate) {

	}

	public void editCandidate(Candidate candidate) {

	}

	public void removeCandidate(Candidate candidate) {

	}
	
	public void sendStatusEmail(String status) {
		
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
