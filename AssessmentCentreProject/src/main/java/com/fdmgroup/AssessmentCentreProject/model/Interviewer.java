package com.fdmgroup.AssessmentCentreProject.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Interviewer extends Staff {
	
	@ManyToMany
	@JoinTable(name = "question_bank",
		joinColumns = { @JoinColumn(name="fk_interviewer_id")},
		inverseJoinColumns = { @JoinColumn(name="fk_question_id") }
	)
	private List<Question> questions;
	
//	private HashMap<Integer, AssessmentCentreResponse> candidateResponses; // key: candidate id, value: the candidate's response
	
	public void chooseQuestion() {
		
	}
	
	public void uploadScore(double score) {
		
	}

}
