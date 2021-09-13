package com.fdmgroup.AssessmentCentreProject.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

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
