package com.fdmgroup.AssessmentCentreProject.model;

import java.util.List;

public class QuestionBank {
	
	private int id;
	private Object questionBankType; // TODO add enum to specify types
	
	private List<Question> questions;
	
	public void addQuestion(Question question) {
		
	}
	
	public boolean deleteQuestion(Question question) {
		// boolean return type to indicate success or failure of delete operation
		return false;
	}

}
