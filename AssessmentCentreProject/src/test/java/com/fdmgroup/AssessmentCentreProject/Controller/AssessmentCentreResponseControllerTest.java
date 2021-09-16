package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import com.fdmgroup.AssessmentCentreProject.model.CandidateACResult;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreRepository;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreResponseRepository;
import com.fdmgroup.AssessmentCentreProject.repository.QuestionRepository;

@SpringBootTest
public class AssessmentCentreResponseControllerTest {

	@MockBean
	private AssessmentCentreRepository assessmentCentreRepo;
	@MockBean
	private AssessmentCentreResponseRepository assessCentreResponseRepo;
	@MockBean
	private QuestionRepository questionRepo;
	@Autowired
	private AssesmentCentreResponseController aCRController;

	@Test
	public void that_getAssesstmentCentreResponseGrouped_makes_correct_calls_and_returns_list() {
		ResponseEntity<List<CandidateACResult>> returned = aCRController.getAssessmentCentreResponseGrouped();
		verify(assessCentreResponseRepo).findAll();
		verify(assessmentCentreRepo).findAll();
		assertNotEquals(null, returned);
	}
	
	

}
