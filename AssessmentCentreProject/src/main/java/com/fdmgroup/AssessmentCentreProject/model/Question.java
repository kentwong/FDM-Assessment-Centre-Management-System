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

	// CONSTRUCTOR
	public Question() {
		super();
	}
	
	public Question(int id, String questionBody, QuestionType questionType) {
		super();
		this.id = id;
		this.questionBody = questionBody;
		this.questionType = questionType;
	}

	// GETTERS & SETTERS
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQuestionBody() {
		return questionBody;
	}

	public void setQuestionBody(String questionBody) {
		this.questionBody = questionBody;
	}

	public QuestionType getQuestionType() {
		return questionType;
	}

	public void setQuestionType(QuestionType questionType) {
		this.questionType = questionType;
	}
	
	@Override
	public String toString() {
		return "Question [id=" + id + ", questionBody=" + questionBody + ", questionType=" + questionType + "]";
	}

}
