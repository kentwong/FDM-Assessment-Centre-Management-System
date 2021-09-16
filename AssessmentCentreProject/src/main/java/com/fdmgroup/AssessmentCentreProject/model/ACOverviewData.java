package com.fdmgroup.AssessmentCentreProject.model;

public class ACOverviewData {
	private int unasignedApplicants;
	private int upcomingAcs;
	private int completedAcs;

	public ACOverviewData(int unasignedApplicants, int upcomingAcs, int completedAcs) {
		super();
		this.unasignedApplicants = unasignedApplicants;
		this.upcomingAcs = upcomingAcs;
		this.completedAcs = completedAcs;
	}

	public int getUnasignedApplicants() {
		return unasignedApplicants;
	}

	public void setUnasignedApplicants(int unasignedApplicants) {
		this.unasignedApplicants = unasignedApplicants;
	}

	public int getUpcomingAcs() {
		return upcomingAcs;
	}

	public void setUpcomingAcs(int upcomingAcs) {
		this.upcomingAcs = upcomingAcs;
	}

	public int getCompletedAcs() {
		return completedAcs;
	}

	public void setCompletedAcs(int completedAcs) {
		this.completedAcs = completedAcs;
	}

}
