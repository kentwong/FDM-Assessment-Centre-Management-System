package com.fdmgroup.AssessmentCentreProject.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class AssessmentCentre {
	
	@Id
	@GeneratedValue
	private int id;
	private Date date;
	
	@OneToMany
	private List<Candidate> candidates;
	
	@ManyToMany
	@JoinTable(name = "assessment_center_interviewers", 
		joinColumns = { @JoinColumn(name="fk_ac_id") }, 
		inverseJoinColumns =	{ @JoinColumn(name="fk_interviewer_id") }
	)
	private List<Interviewer> interviewers;
	
}
