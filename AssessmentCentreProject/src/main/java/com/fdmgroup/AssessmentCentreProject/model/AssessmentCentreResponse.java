package com.fdmgroup.AssessmentCentreProject.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class AssessmentCentreResponse {
	
	@Id
	@GeneratedValue
	private int id;
	
	@OneToOne // ONE acresponse TO ONE candidate
	private Candidate candidate;
	
	@ManyToOne // MANY acresponse TO ONE interviewer
	private Interviewer interviewer;
	
	@ManyToOne // MANY acresponse TO ONE question
	private Question question;
	
	private double points;
	private String notes;

}
