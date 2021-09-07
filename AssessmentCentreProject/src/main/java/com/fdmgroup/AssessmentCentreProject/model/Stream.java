package com.fdmgroup.AssessmentCentreProject.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fdmgroup.AssessmentCentreProject.model.enums.AptitudeType;

@Entity
public class Stream {
	
	@Id
	@GeneratedValue
	private int id;
	private String streamName;
	
	private Date dateStart;
	private int duration;
	
	private AptitudeType aptitudeTestType;
	
	// CONSTRUCTOR
	public Stream() {
		super();
	}
	
	// GETTERS & SETTERS
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStreamName() {
		return streamName;
	}

	public void setStreamName(String streamName) {
		this.streamName = streamName;
	}

	public Date getDateStart() {
		return dateStart;
	}

	public void setDateStart(Date dateStart) {
		this.dateStart = dateStart;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public AptitudeType getAptitudeTestType() {
		return aptitudeTestType;
	}

	public void setAptitudeTestType(AptitudeType aptitudeTestType) {
		this.aptitudeTestType = aptitudeTestType;
	}

	@Override
	public String toString() {
		return "Stream [id=" + id + ", streamName=" + streamName + ", dateStart=" + dateStart + ", duration=" + duration
				+ ", aptitudeTestType=" + aptitudeTestType + "]";
	}
	
}
