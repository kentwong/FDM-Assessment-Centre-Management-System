package com.fdmgroup.AssessmentCentreProject.model;

import java.time.LocalDate;

public class CandidateACResult {

	private Candidate candidate;
	private double general;
	private double technical;
	private double behavioural;
	private double curveball;
	private Question question;
	private Interviewer interviewer;
	private double overall;
	private double technicalTotal;
	private double generalTotal;
	private double curveballTotal;
	private double behaviouralTotal;
	private String grade;
	private String notes;
	private LocalDate date;

	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}

	public double getGeneral() {
		return general;
	}

	public void setGeneral(double general) {
		this.general = general;
	}

	public double getTechnical() {
		return technical;
	}

	public void setTechnical(double technical) {
		this.technical = technical;
	}

	public double getBehavioural() {
		return behavioural;
	}

	public void setBehavioural(double behavioural) {
		this.behavioural = behavioural;
	}

	public double getCurveball() {
		return curveball;
	}

	public void setCurveball(double curveball) {
		this.curveball = curveball;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public Interviewer getInterviewer() {
		return interviewer;
	}

	public void setInterviewer(Interviewer interviewer) {
		this.interviewer = interviewer;
	}

	public double getOverall() {
		return overall;
	}

	public void setOverall(double overall) {
		this.overall = overall;
	}

	public double getTechnicalTotal() {
		return technicalTotal;
	}

	public void setTechnicalTotal(double technicalTotal) {
		this.technicalTotal = technicalTotal;
	}

	public double getGeneralTotal() {
		return generalTotal;
	}

	public void setGeneralTotal(double generalTotal) {
		this.generalTotal = generalTotal;
	}

	public double getCurveballTotal() {
		return curveballTotal;
	}

	public void setCurveballTotal(double curveballTotal) {
		this.curveballTotal = curveballTotal;
	}

	public double getBehaviouralTotal() {
		return behaviouralTotal;
	}

	public void setBehaviouralTotal(double behaviouralTotal) {
		this.behaviouralTotal = behaviouralTotal;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

}
