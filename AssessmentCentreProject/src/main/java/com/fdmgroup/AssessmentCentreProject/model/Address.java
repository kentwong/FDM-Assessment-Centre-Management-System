package com.fdmgroup.AssessmentCentreProject.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Address {
	
	@Id
	@GeneratedValue
	private int id;
	// can be expanded if required
	private String address;
	
	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Address(int id, String address) {
		super();
		this.id = id;
		this.address = address;
	}
}
