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
		List<Candidate> toBeRemoved = new ArrayList<>();
		for (Candidate remove : candidates) {
			for (Candidate candidate : newAC.getCandidates()) {
				if (candidate.getId() == remove.getId()) {
					toBeRemoved.add(candidate);
				}
			}
		}
		List<Candidate> updated = new ArrayList<>();
		updated = newAC.getCandidates();
		updated.removeAll(toBeRemoved);
		
		newAC.setCandidates(updated);
	}
	
	public void assignInterviewers(List<Interviewer> interviewers) {
		newAC.setInterviewers(interviewers);
	}
	
	public void removeInterviewers(List<Interviewer> interviewers) {
		List<Interviewer> toBeRemoved = new ArrayList<>();
		for (Interviewer remove : interviewers) {
			for (Interviewer interviewer : newAC.getInterviewers()) {
				if (interviewer.getId() == remove.getId()) {
					toBeRemoved.add(interviewer);
				}
			}
		}
		List<Interviewer> updated = new ArrayList<>();
		updated = newAC.getInterviewers();
		updated.removeAll(toBeRemoved);
		
		newAC.setInterviewers(updated);
	}
	
	// JUST USE LOGIC AS A FILTER FOR QUESTION -> FRONTEND
//	public void chooseInterviewType(QuestionType qType) { 
//	}
	
	public void chooseInterviewerToCandidate(Interviewer interviewer, Candidate candidate, List<Question> questions) {
		List<AssessmentCentreResponse> responses = new ArrayList<>();
		for (Question question : questions) {
			AssessmentCentreResponse response = new AssessmentCentreResponse(candidate, interviewer, question);
			responses.add(response);
		}
		interviewer.setResponses(responses);
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
