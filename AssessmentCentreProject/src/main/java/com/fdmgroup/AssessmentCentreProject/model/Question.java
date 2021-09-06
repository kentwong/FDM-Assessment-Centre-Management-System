package com.fdmgroup.AssessmentCentreProject.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fdmgroup.AssessmentCentreProject.model.enums.QuestionType;

@Entity
public class Question {
	
	@Id
	@GeneratedValue
	private int id;
	private String questionBody;
	private QuestionType questionType;
	
}
