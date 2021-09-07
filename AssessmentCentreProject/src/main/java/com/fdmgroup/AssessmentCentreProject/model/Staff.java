package com.fdmgroup.AssessmentCentreProject.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Staff {
	
	@Id
	@GeneratedValue
	private int id;
	private String firstName;
	private String lastName;
	
	private String email;
	private String phoneNumber;
//	private Object emailTemplate; // TODO define type
	
	// GETTERS & SETTERS
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
	
	@Override
	public String toString() {
		return "Staff [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", phoneNumber=" + phoneNumber + "]";
	}
	
	
}
