
package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentreResponse;
import com.fdmgroup.AssessmentCentreProject.model.CandidateACResult;
import com.fdmgroup.AssessmentCentreProject.model.enums.QuestionType;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreResponseRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/assessmentCentreResponse/api/v1/")
public class AssesmentCentreResponseController {
	private static Logger logger = LogManager.getLogger(AssesmentCentreResponseController.class);

	@Autowired
	private AssessmentCentreResponseRepository assessmentCentreResponseRepo;

	public AssesmentCentreResponseController(AssessmentCentreResponseRepository assessmentCentreResponseRepo) {
		super();
		this.assessmentCentreResponseRepo = assessmentCentreResponseRepo;
	}

	/**The getAllAssesmentCentreResponses will return a list of AssesmentCentreResponses
	 * @return List of AssesmentCentreResponse objects
	 */
	@GetMapping("/all")
	public ResponseEntity<List<AssessmentCentreResponse>> getAllAssessmentCentreResponses() {
		logger.info("GET request for /all acR");
		return ResponseEntity.ok(assessmentCentreResponseRepo.findAll());

	}
	
	@GetMapping("/questionType")
	public ResponseEntity<List<CandidateACResult>> getAssessmentCentreResponseGrouped(){
		logger.info("Return a custom query");
		List<AssessmentCentreResponse> responses = assessmentCentreResponseRepo.findAll();
		List<CandidateACResult> groupedResponses = new ArrayList<>();
		for (AssessmentCentreResponse response : responses) {
			CandidateACResult result = new CandidateACResult();
			result.setCandidate(response.getCandidate());
			result.setInterviewer(response.getInterviewer());
			result.setQuestion(response.getQuestion());
			if(response.getQuestion().getQuestionType().equals(QuestionType.GENERAL)){
				result.setGeneral(response.getPoints());
			}else if(response.getQuestion().getQuestionType().equals(QuestionType.TECHNICAL)){
				result.setTechnical(response.getPoints());
			}else if(response.getQuestion().getQuestionType().equals(QuestionType.BEHAVIOURAL)){
				result.setBehavioural(response.getPoints());
			}else if(response.getQuestion().getQuestionType().equals(QuestionType.CURVEBALL)){
				result.setCurveball(response.getPoints());
			}
			result.setOverall(response.getPoints());
			groupedResponses.add(result);
		}
		return ResponseEntity.ok(groupedResponses);

		
	}
}