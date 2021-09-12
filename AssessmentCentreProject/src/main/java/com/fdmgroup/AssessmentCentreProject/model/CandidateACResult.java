package com.fdmgroup.AssessmentCentreProject.model;

public class CandidateACResult {

	private Candidate candidate;
	private double general;
	private double technical;
	private double behavioural;
	private double curveball;
	private Question question;
	private Interviewer interviewer;
	private double overall;

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

}
