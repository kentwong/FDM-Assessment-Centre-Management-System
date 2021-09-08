package com.fdmgroup.AssessmentCentreProject.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class AssessmentCentre {
	
	@Id
	@GeneratedValue
	private int id;
	private Date date;
	
	@OneToMany
	private List<Candidate> candidates;
	
	@ManyToOne (cascade=CascadeType.ALL)
	@JoinColumn(name = "fk_coordinator_id")
	private ACCoordinator coordinator;
	
	@ManyToMany
	@JoinTable(name = "assessment_center_interviewers", 
		joinColumns = { @JoinColumn(name="fk_ac_id") }, 
		inverseJoinColumns =	{ @JoinColumn(name="fk_interviewer_id") }
	)
	private List<Interviewer> interviewers;

	// CONSTRUCTOR
	public AssessmentCentre() {
		super();
	}

	// GETTERS & SETTERS
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public List<Candidate> getCandidates() {
		return candidates;
	}

	public void setCandidates(List<Candidate> candidates) {
		this.candidates = candidates;
	}

	public ACCoordinator getCoordinator() {
		return coordinator;
	}

	public void setCoordinator(ACCoordinator coordinator) {
		this.coordinator = coordinator;
	}

	public List<Interviewer> getInterviewers() {
		return interviewers;
	}

	public void setInterviewers(List<Interviewer> interviewers) {
		this.interviewers = interviewers;
	}

	@Override
	public String toString() {
		return "AssessmentCentre [id=" + id + ", date=" + date + ", candidates=" + candidates + ", interviewers="
				+ interviewers + "]";
	}
	
}
