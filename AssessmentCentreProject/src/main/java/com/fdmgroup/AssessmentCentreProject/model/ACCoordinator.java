package com.fdmgroup.AssessmentCentreProject.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class ACCoordinator extends Staff {
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="coordinator", fetch = FetchType.EAGER)
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
	 * Sets @param candidates for AC
	 */
	public void assignCandidates(List<Candidate> candidates) {
		newAC.setCandidates(candidates);
	}
	
	/**
	 * Sets @param interviewers for AC
	 */
	public void assignInterviewers(List<Interviewer> interviewers) {
		newAC.setInterviewers(interviewers);
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
