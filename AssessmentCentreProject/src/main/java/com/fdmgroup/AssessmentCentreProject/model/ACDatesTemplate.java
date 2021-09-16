package com.fdmgroup.AssessmentCentreProject.model;

import java.time.LocalDateTime;

public class ACDatesTemplate {
	
	private int id;
	private LocalDateTime start;
	private LocalDateTime end;
	
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
	
	@Override
	public String toString() {
		return "ACDatesTemplate [id=" + id + ", start=" + start + ", end=" + end + "]";
	}
	
	
	
}
