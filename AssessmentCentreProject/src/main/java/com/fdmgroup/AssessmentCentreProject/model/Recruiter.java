package com.fdmgroup.AssessmentCentreProject.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
public class Recruiter extends Staff {
	
	@OneToMany(mappedBy="recruiter")
	private List<Candidate> candidates;

	public void recruit(Candidate candidate) {

	}

	public void editCandidate(Candidate candidate) {

	}

	public void removeCandidate(Candidate candidate) {

	}

	public List<Candidate> getAllCandidates() {
		return null;
	}
	
	public void sendStatusEmail(String status) {
		
	}
}
