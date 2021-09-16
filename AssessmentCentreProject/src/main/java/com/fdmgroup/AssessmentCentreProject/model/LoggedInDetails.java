package com.fdmgroup.AssessmentCentreProject.model;

public class LoggedInDetails {
	private int staffId;
	private String role;
	private String name;

	public LoggedInDetails(int staffId, String role, String name) {
		super();
		this.staffId = staffId;
		this.role = role;
		this.name = name;
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
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	

}
