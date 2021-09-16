package com.fdmgroup.AssessmentCentreProject.Controller;

import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.fdmgroup.AssessmentCentreProject.model.ACCoordinator;
import com.fdmgroup.AssessmentCentreProject.repository.ACCoordinatorRepository;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreRepository;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreResponseRepository;
import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;
import com.fdmgroup.AssessmentCentreProject.repository.InterviewerRepository;
import com.fdmgroup.AssessmentCentreProject.repository.QuestionRepository;

@ExtendWith(MockitoExtension.class)
public class AssessmentCentreControllerTest {
	
	@Mock
	private AssessmentCentreRepository mockACRepo;
	@Mock
	private ACCoordinatorRepository mockCoordinatorRepo;
	@Mock
	private CandidateRepository mockCandidateRepo;
	@Mock
	private InterviewerRepository mockInterviewerRepo;
	@Mock
	private QuestionRepository mockQuestionRepo;
	@Mock
	private AssessmentCentreResponseRepository mockResponseRepo;
	
	@Mock
	private ACCoordinator mockCoordinator;
	
	private AssessmentCentreController controller;
	
	@BeforeEach
	public void setup() {
		controller = new AssessmentCentreController(mockACRepo, mockCoordinatorRepo, mockCandidateRepo, mockInterviewerRepo, mockQuestionRepo, mockResponseRepo);
	}
	
	@Test
	public void that_getAllAssessmentCentres_runsFindAll_onACRepo() {
		controller.getAllAssessmentCentres();
		verify(mockACRepo).findAll();
	}
	
	@Test
	public void that_getInterviewers_runsFindAll_onInterviewerRepo() {
		controller.getInterviewers();
		verify(mockInterviewerRepo).findAll();
	}
	
	@Test
	public void that_getPendingCandidates_runsFindAll_onCandidateAndACRepos() {
		controller.getPendingCandidates();
		verify(mockCandidateRepo).findAll();
		verify(mockACRepo).findAll();
	}
	
	
	
	
	
	
}
