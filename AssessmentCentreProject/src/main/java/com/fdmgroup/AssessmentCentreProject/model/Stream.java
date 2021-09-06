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

}
