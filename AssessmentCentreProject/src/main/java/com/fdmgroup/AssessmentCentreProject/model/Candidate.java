package com.fdmgroup.AssessmentCentreProject.model;

import java.util.Date;
import java.util.List;

public class Candidate {
	
	private int id;
	private String firstName;
	private String lastName;
	private Date dateOfBirth;
	private Address address;
	private String email;
	private String phoneNumber;
	private String university;
	
	private String cv; // URL to CV, stored externally
	
	private Recruiter recruiter;
	private Stream stream;
	
	private double aptitudeScore;
	
	private List<Candidate> history;

}
