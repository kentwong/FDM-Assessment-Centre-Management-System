package com.fdmgroup.AssessmentCentreProject.model;

public class PendingStatusData {
	private int cv;
	private int phoneScreening;
	private int aptitudeTest;
	private int videoInterview;
	private int ac;
	private int newApplications;
	private int offers;
	private int rejectedApplications;

	public PendingStatusData(int cv, int phoneScreening, int aptitudeTest, int videoInterview, int ac,
			int newApplications, int offers, int rejectedApplications) {
		super();
		this.cv = cv;
		this.phoneScreening = phoneScreening;
		this.aptitudeTest = aptitudeTest;
		this.videoInterview = videoInterview;
		this.ac = ac;
		this.newApplications = newApplications;
		this.offers = offers;
		this.rejectedApplications = rejectedApplications;
	}

	public int getCv() {
		return cv;
	}

	public void setCv(int cv) {
		this.cv = cv;
	}

	public int getPhoneScreening() {
		return phoneScreening;
	}

	public void setPhoneScreening(int phoneScreening) {
		this.phoneScreening = phoneScreening;
	}

	public int getAptitudeTest() {
		return aptitudeTest;
	}

	public void setAptitudeTest(int aptitudeTest) {
		this.aptitudeTest = aptitudeTest;
	}

	public int getVideoInterview() {
		return videoInterview;
	}

	public void setVideoInterview(int videoInterview) {
		this.videoInterview = videoInterview;
	}

	public int getAc() {
		return ac;
	}

	public void setAc(int ac) {
		this.ac = ac;
	}

	public int getNewApplications() {
		return newApplications;
	}

	public void setNewApplications(int newApplications) {
		this.newApplications = newApplications;
	}

	public int getOffers() {
		return offers;
	}

	public void setOffers(int offers) {
		this.offers = offers;
	}

	public int getRejectedApplications() {
		return rejectedApplications;
	}

	public void setRejectedApplications(int rejectedApplications) {
		this.rejectedApplications = rejectedApplications;
	}

}
