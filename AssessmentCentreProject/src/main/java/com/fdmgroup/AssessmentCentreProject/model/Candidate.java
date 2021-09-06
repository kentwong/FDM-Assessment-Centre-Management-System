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
	
	private Staff recruiter;
	private Stream stream;
	
	private List<Candidate> history;

}
