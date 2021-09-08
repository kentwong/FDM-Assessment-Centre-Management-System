package com.fdmgroup.AssessmentCentreProject.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "candidate")
public class Candidate {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstName;
	private String lastName;
	private String dateOfBirth;
	@OneToOne(cascade = CascadeType.MERGE) // Change to MERGE to solve detached entity passed to persist error
	@JoinColumn(name = "fk_address_id")
	private Address address;
	private String email;
	private String phoneNumber;
	private String university;
	
	private String cv; // URL to CV, stored externally
	private double aptitudeScore;
	private String notes;
	
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

	public Candidate() {
		super();
	}
	
	public Candidate(int id, String firstName, String lastName, String dateOfBirth, Address address, String email,
			String phoneNumber, String university, String cv, double aptitudeScore, String notes, Recruiter recruiter,
			Stream stream) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.university = university;
		this.cv = cv;
		this.aptitudeScore = aptitudeScore;
		this.notes = notes;
		this.recruiter = recruiter;
		this.stream = stream;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getUniversity() {
		return university;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public String getCv() {
		return cv;
	}

	public void setCv(String cv) {
		this.cv = cv;
	}

	public double getAptitudeScore() {
		return aptitudeScore;
	}

	public void setAptitudeScore(double aptitudeScore) {
		this.aptitudeScore = aptitudeScore;
	}

	public Recruiter getRecruiter() {
		return recruiter;
	}

	public void setRecruiter(Recruiter recruiter) {
		this.recruiter = recruiter;
	}

	public Stream getStream() {
		return stream;
	}

	public void setStream(Stream stream) {
		this.stream = stream;
	}

	public List<Candidate> getHistory() {
		return history;
	}

	public void setHistory(List<Candidate> history) {
		this.history = history;
	}

	@Override
	public String toString() {
		return "Candidate [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", dateOfBirth="
				+ dateOfBirth + ", address=" + address + ", email=" + email + ", phoneNumber=" + phoneNumber
				+ ", university=" + university + ", cv=" + cv + ", aptitudeScore=" + aptitudeScore + ", recruiter="
				+ recruiter + ", stream=" + stream + ", history=" + history + "]";
	}
	
	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
	
	// application status
	// assessmentCentre -> bidirectional

}
