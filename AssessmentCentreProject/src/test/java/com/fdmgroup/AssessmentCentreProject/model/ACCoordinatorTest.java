package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class ACCoordinatorTest {
	
	private ACCoordinator coordinator;
	
	@BeforeEach
	public void setup() {
		coordinator = new ACCoordinator();
	}
	
	// assignCandidates
	@Test
	public void that_assignCandidates_setsACcandidatesToListPassedIn() {
		Candidate can1 = new Candidate();
		Candidate can2 = new Candidate();
		List<Candidate> candidates = new ArrayList<>();
		candidates.add(can1);
		candidates.add(can2);
		
		coordinator.assignCandidates(candidates);
		
		assertEquals(2, coordinator.getNewAC().getCandidates().size());
	}
	
	// assignInterviewers
	@Test
	public void that_assignInterviewers_setsACinterviewersToListPassedIn() {
		Interviewer int1 = new Interviewer();
		Interviewer int2 = new Interviewer();
		Interviewer int3 = new Interviewer();
		List<Interviewer> interviewers = new ArrayList<>();
		interviewers.add(int1);
		interviewers.add(int2);
		interviewers.add(int3);
		
		coordinator.assignInterviewers(interviewers);
		
		assertEquals(3, coordinator.getNewAC().getInterviewers().size());
	}
	
	// saveAssessmentCentre
	@Test
	public void that_saveAssessmentCentre_addsNewACToListAndCreatesNewInstance() {
		coordinator.saveAssessmentCentre();
		
		assertEquals(1, coordinator.getAssessmentCentres().size());
	}
}
