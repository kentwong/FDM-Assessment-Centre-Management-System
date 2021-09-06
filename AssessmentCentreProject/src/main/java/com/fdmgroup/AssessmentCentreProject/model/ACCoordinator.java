package com.fdmgroup.AssessmentCentreProject.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fdmgroup.AssessmentCentreProject.model.enums.QuestionType;

@Entity
public class ACCoordinator extends Staff {
	
	@OneToMany
	private List<AssessmentCentre> assessmentCentres;
	
	public void scheduleAC() {
		
	}
	
	public void assignCandidates(List<Candidate> candidatesList) {
		
	}
	
	public void assignInterviewers(List<Staff> interviewersList) {
		
	}
	
	public void chooseInterviewType(Staff staff, QuestionType questionType) { 
		
	}
	
	public void chooseInterviewerToCandidate(Staff staff, Candidate candidate) {
		
	}

}
