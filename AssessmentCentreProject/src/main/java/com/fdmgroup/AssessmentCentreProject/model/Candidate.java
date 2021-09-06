package com.fdmgroup.AssessmentCentreProject.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Candidate {
	
	@Id
	@GeneratedValue
	private int id;
	private String firstName;
	private String lastName;
	private Date dateOfBirth;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_address_id")
	private Address address;
	private String email;
	private String phoneNumber;
	private String university;
	
	private String cv; // URL to CV, stored externally
	private double aptitudeScore;
	
	@ManyToOne
	private Recruiter recruiter;
	
	@ManyToOne
	private Stream stream;
	
	
	@ManyToMany
	@JoinTable(name = "candidate_history", 
		joinColumns = { @JoinColumn(name="fk_candidate_id") }, 
		inverseJoinColumns =	{ @JoinColumn(name="fk_old_id") }
	) // editCandidate() ==> creates new instance of candidate (for new generated id) -> set history to old Candidate history + Candidate
	private List<Candidate> history;
	
	
	// application status
	// assessmentCentre -> bidirectional
	
}
