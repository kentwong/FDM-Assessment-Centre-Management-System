package com.fdmgroup.AssessmentCentreProject.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class ACCoordinator extends Staff {
	
	@OneToMany (cascade=CascadeType.ALL, mappedBy="coordinator", fetch = FetchType.EAGER)
	@JsonIgnore
	private List<AssessmentCentre> assessmentCentres = new ArrayList<>();
	@Transient
	private AssessmentCentre newAC = new AssessmentCentre();
	
	// CONSTRUCTOR
	public ACCoordinator() {
		super();
	}
	
	// BEHAVIOURS
	/**
	 * Sets the new AssessmentCentre with a @param date
	 */
	public void scheduleAC(Date date) {
		newAC = new AssessmentCentre();
//		newAC.setDate(date);
	}
	
	/**
	 * Sets @param candidates for AC
	 */
	public void assignCandidates(List<Candidate> candidates) {
		newAC.setCandidates(candidates);
	}
	
	/**
	 * Removes given @param candidates from AC
	 */
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
	
	/**
	 * Sets @param interviewers for AC
	 */
	public void assignInterviewers(List<Interviewer> interviewers) {
		newAC.setInterviewers(interviewers);
	}
	
	/**
	 * Removes given @param interviewers from AC
	 */
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
	
	/**
	 * Gives @param interviewer a list of @param questions for @param candidate
	 * A question bank to link questions to answers (AssessmentCentreResponse class)
	 */
	public void chooseInterviewerToCandidate(Interviewer interviewer, Candidate candidate, List<Question> questions) {
		List<AssessmentCentreResponse> responses = new ArrayList<>();
		for (Question question : questions) {
			AssessmentCentreResponse response = new AssessmentCentreResponse(candidate, interviewer, question);
			responses.add(response);
		}
		interviewer.setResponses(responses);
	}
	
	/**
	 * Finalise the AC
	 */
	public void saveAssessmentCentre() {
		assessmentCentres.add(newAC);
		newAC = new AssessmentCentre();
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
		return "ACCoordinator [id=" + super.getId() + ", firstName=" + super.getFirstName() + ", lastName=" + super.getLastName() +  "]";
	}
	
}
