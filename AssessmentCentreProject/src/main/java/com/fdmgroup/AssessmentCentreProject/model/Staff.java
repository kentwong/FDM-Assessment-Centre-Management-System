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

}
