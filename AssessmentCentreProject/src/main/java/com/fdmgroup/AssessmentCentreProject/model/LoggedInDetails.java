package com.fdmgroup.AssessmentCentreProject.model;

public class LoggedInDetails {
	private int staffId;
	private String role;

	public LoggedInDetails(int staffId, String role) {
		super();
		this.staffId = staffId;
		this.role = role;
	}

	public int getStaffId() {
		return staffId;
	}

	public void setStaffId(int staffId) {
		this.staffId = staffId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

}
