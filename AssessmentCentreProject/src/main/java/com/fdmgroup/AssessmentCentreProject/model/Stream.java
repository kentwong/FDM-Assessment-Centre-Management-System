package com.fdmgroup.AssessmentCentreProject.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fdmgroup.AssessmentCentreProject.model.enums.AptitudeType;

@Entity
public class Stream {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String streamName;
	
	private Date dateStart;
	private int duration;
	
	private AptitudeType aptitudeTestType;

	
	public Stream() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Stream(int id, String streamName, Date dateStart, int duration, AptitudeType aptitudeTestType) {
		super();
		this.id = id;
		this.streamName = streamName;
		this.dateStart = dateStart;
		this.duration = duration;
		this.aptitudeTestType = aptitudeTestType;
	}

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

	
}
