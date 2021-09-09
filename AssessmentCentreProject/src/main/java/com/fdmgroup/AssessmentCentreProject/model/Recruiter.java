package com.fdmgroup.AssessmentCentreProject.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Recruiter extends Staff {
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="recruiter")
	@LazyCollection(LazyCollectionOption.FALSE)
	@JsonIgnore //This is to eliminate recursive JSON view for candidate's REST controller
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
