package com.fdmgroup.AssessmentCentreProject.model;

import java.util.HashMap;
import java.util.List;

public class Interviewer extends Staff {
	
	private List<Question> questions;
	private HashMap<Integer, AssessmentCentreResponse> candidateResponses; // key: candidate id, value: the candidate's response
	
	public void chooseQuestion() {
		
	}
	
	public void uploadScore(double score) {
		
	}

}
