package com.fdmgroup.AssessmentCentreProject.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import com.fdmgroup.AssessmentCentreProject.model.enums.QuestionType;

@Entity
public class ACCoordinator extends Staff {
	
	@OneToMany
	private List<AssessmentCentre> assessmentCentres = new ArrayList<>();
	@Transient
	private AssessmentCentre newAC;
	
	// CONSTRUCTORS
	public ACCoordinator() {
		super();
	}
	
	// BEHAVIOURS
	public void scheduleAC(Date date) {
		newAC = new AssessmentCentre();
		newAC.setDate(date);
	}
	
	public void assignCandidates(List<Candidate> candidates) {
		newAC.setCandidates(candidates);
	}
	
	public void removeCandidates(List<Candidate> candidates) {
		List<Candidate> updated = new ArrayList<>();
//		updated = newAC.getCandidates().stream().filter()
	}
	
	public void assignInterviewers(List<Interviewer> interviewers) {
		newAC.setInterviewers(interviewers);
	}
	
	public void chooseInterviewType(Staff staff, QuestionType questionType) { 
		
	}
	
	public void chooseInterviewerToCandidate(Staff staff, Candidate candidate) {
		
	}

	// GETTERS & SETTERS
	public List<AssessmentCentre> getAssessmentCentres() {
		return assessmentCentres;
	}

	public void setAssessmentCentres(List<AssessmentCentre> assessmentCentres) {
		this.assessmentCentres = assessmentCentres;
	}

	public AssessmentCentre getNewAC() {
		return newAC;
	}

	public void setNewAC(AssessmentCentre newAC) {
		this.newAC = newAC;
	}

	@Override
	public String toString() {
		return "ACCoordinator [assessmentCentres=" + assessmentCentres + ", newAC=" + newAC + "]";
	}
	
}
