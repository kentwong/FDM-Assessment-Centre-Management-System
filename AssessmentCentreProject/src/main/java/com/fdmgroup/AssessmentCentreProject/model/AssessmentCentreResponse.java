package com.fdmgroup.AssessmentCentreProject.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class AssessmentCentreResponse {
	
	@Id
	@GeneratedValue
	private int id;
	
	@OneToOne // ONE acresponse TO ONE candidate
	private Candidate candidate;
	
	@ManyToOne // MANY acresponse TO ONE interviewer
	private Interviewer interviewer;
	
	@ManyToOne // MANY acresponse TO ONE question
	private Question question;
	
	private double points;
	private String notes;
	
	// CONSTRUCTOR
	public AssessmentCentreResponse() {
		super();
	}
	
	public AssessmentCentreResponse(Candidate candidate, Interviewer interviewer, Question question) {
		super();
		this.candidate = candidate;
		this.interviewer = interviewer;
		this.question = question;
	}
	
	// GETTERS & SETTERS
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}

	public Interviewer getInterviewer() {
		return interviewer;
	}

	public void setInterviewer(Interviewer interviewer) {
		this.interviewer = interviewer;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public double getPoints() {
		return points;
	}

	public void setPoints(double points) {
		this.points = points;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	@Override
	public String toString() {
		return "AssessmentCentreResponse [id=" + id + ", candidate=" + candidate + ", interviewer=" + interviewer
				+ ", question=" + question + ", points=" + points + ", notes=" + notes + "]";
	}
	
	
}
