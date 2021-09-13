package com.fdmgroup.AssessmentCentreProject.model;

public class ResponseTemplate {
	
	private String candidate;
	private String interviewType;
	private String interviewer;
	
	public String getCandidate() {
		return candidate;
	}
	public void setCandidate(String candidate) {
		this.candidate = candidate;
	}
	public String getInterviewer() {
		return interviewer;
	}
	public void setInterviewer(String interviewer) {
		this.interviewer = interviewer;
	}
	public String getInterviewType() {
		return interviewType;
	}
	public void setInterviewType(String interviewType) {
		this.interviewType = interviewType;
	}
	
	@Override
	public String toString() {
		return "ResponseTemplate [candidate=" + candidate + ", interviewType=" + interviewType + ", interviewer="
				+ interviewer + "]";
	}
	
	
	
}
