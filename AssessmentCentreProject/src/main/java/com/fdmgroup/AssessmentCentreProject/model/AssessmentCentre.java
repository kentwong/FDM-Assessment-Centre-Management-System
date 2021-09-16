package com.fdmgroup.AssessmentCentreProject.model;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
	
	private LocalDateTime start;
	private LocalDateTime end;
	
	@ManyToOne/*(cascade=CascadeType.ALL) -> 15/09 TEST */ (cascade=CascadeType.PERSIST)
	@JoinColumn(name = "fk_coordinator_id")
	private ACCoordinator coordinator;
	
	@OneToMany(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Candidate> candidates;
	
	@ManyToMany//(cascade=CascadeType.ALL) -> 15/09 TEST
	@JoinTable(name = "assessment_center_interviewers", 
		joinColumns = { @JoinColumn(name="fk_ac_id") }, 
		inverseJoinColumns =	{ @JoinColumn(name="fk_interviewer_id") }
	)
	private List<Interviewer> interviewers;

	// CONSTRUCTOR
	public AssessmentCentre() {
		super();
	}

	public AssessmentCentre(List<Candidate> candidates, ACCoordinator coordinator, List<Interviewer> interviewers) {
		super();
		this.candidates = candidates;
		this.coordinator = coordinator;
		this.interviewers = interviewers;
	}

	// GETTERS & SETTERS
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDateTime getStart() {
		return start;
	}

	public void setStart(LocalDateTime start) {
		this.start = start;
	}

	public LocalDateTime getEnd() {
		return end;
	}

	public void setEnd(LocalDateTime end) {
		this.end = end;
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
		return "AssessmentCentre [id=" + id + ", start=" + start + ", end=" + end + ", coordinator=" + coordinator
				+ "]";
	}

	
	
}
