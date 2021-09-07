package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Date;
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
		coordinator.scheduleAC(new Date());
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
	
	// removeCandidates
	@Test
	public void that_removeCandidates_removesCandidatesPassedIn() {
		Candidate can1 = new Candidate();
		can1.setId(1);
		Candidate can2 = new Candidate();
		can2.setId(2);
		Candidate can3 = new Candidate();
		can3.setId(3);
		List<Candidate> candidates = new ArrayList<>();
		candidates.add(can1);
		candidates.add(can2);
		candidates.add(can3);
		coordinator.assignCandidates(candidates);
		
		List<Candidate> remove = new ArrayList<>();
		remove.add(can1);
		remove.add(can3);
		
		coordinator.removeCandidates(remove);
		
		assertEquals(1, coordinator.getNewAC().getCandidates().size());
		assertEquals(2, coordinator.getNewAC().getCandidates().get(0).getId());
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
	
	// removeInterviewers
	@Test
	public void that_removeInterviewers_removesInterviewersPassedIn() {
		Interviewer int1 = new Interviewer();
		int1.setId(1);
		Interviewer int2 = new Interviewer();
		int2.setId(2);
		Interviewer int3 = new Interviewer();
		int3.setId(3);
		List<Interviewer> interviewers = new ArrayList<>();
		interviewers.add(int1);
		interviewers.add(int2);
		interviewers.add(int3);
		coordinator.assignInterviewers(interviewers);
		
		List<Interviewer> remove = new ArrayList<>();
		remove.add(int2);
		remove.add(int1);
		
		coordinator.removeInterviewers(remove);
		
		assertEquals(1, coordinator.getNewAC().getInterviewers().size());
		assertEquals(3, coordinator.getNewAC().getInterviewers().get(0).getId());
	}
	
	// chooseInterviewType -> not implemented*
	
	
	// chooseInterviewerToCandidate
	@Test
	public void that_chooseInterviewerToCandidate_assignsPassedQuestionsToInterviewerAndCandidate() {
		Interviewer interviewer = new Interviewer();
		Candidate candidate = new Candidate();
		Question q1 = new Question();
		Question q2 = new Question();
		Question q3 = new Question();
		List<Question> questions = new ArrayList<>();
		questions.add(q1);
		questions.add(q2);
		questions.add(q3);
		
		coordinator.chooseInterviewerToCandidate(interviewer, candidate, questions);
		
		assertEquals(3, interviewer.getResponses().size());
	}
	
	// saveAssessmentCentre
	@Test
	public void that_saveAssessmentCentre_addsNewACToListAndCreatesNewInstance() {
		coordinator.saveAssessmentCentre();
		
		assertEquals(1, coordinator.getAssessmentCentres().size());
	}
}
