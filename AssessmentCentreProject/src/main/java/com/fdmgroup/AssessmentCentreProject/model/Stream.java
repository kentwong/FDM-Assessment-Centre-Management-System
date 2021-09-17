package com.fdmgroup.AssessmentCentreProject.model;

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
	
	private int duration;
	
	private AptitudeType aptitudeTestType;
	
	// CONSTRUCTOR
	public Stream() {
		super();
	}
	
	public Stream(int id, String streamName, int duration, AptitudeType aptitudeTestType) {
		super();
		this.id = id;
		this.streamName = streamName;
		this.duration = duration;
		this.aptitudeTestType = aptitudeTestType;
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

	@Override
	public String toString() {
		return "Stream [id=" + id + ", streamName=" + streamName + ", duration=" + duration + ", aptitudeTestType="
				+ aptitudeTestType + "]";
	}

	

}
