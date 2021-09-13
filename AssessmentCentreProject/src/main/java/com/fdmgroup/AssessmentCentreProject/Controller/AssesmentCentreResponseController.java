
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

	/**
	 * The getAllAssesmentCentreResponses will return a list of
	 * AssesmentCentreResponses
	 * 
	 * @return List of AssesmentCentreResponse objects
	 */
	@GetMapping("/all")
	public ResponseEntity<List<CandidateACResult>> getAllAssessmentCentreResponses() {
		logger.info("Return a custom result set");
		List<AssessmentCentreResponse> responses = assessmentCentreResponseRepo.findAll();
		List<CandidateACResult> groupedResponses = new ArrayList<>();
		for (AssessmentCentreResponse response : responses) {
			CandidateACResult result = new CandidateACResult();
			result.setCandidate(response.getCandidate());
			result.setInterviewer(response.getInterviewer());
			result.setQuestion(response.getQuestion());
			if (response.getQuestion().getQuestionType().equals(QuestionType.GENERAL)) {
				result.setGeneral(response.getPoints());
			} else if (response.getQuestion().getQuestionType().equals(QuestionType.TECHNICAL)) {
				result.setTechnical(response.getPoints());
			} else if (response.getQuestion().getQuestionType().equals(QuestionType.BEHAVIOURAL)) {
				result.setBehavioural(response.getPoints());
			} else if (response.getQuestion().getQuestionType().equals(QuestionType.CURVEBALL)) {
				result.setCurveball(response.getPoints());
			}
			result.setOverall(response.getPoints());
			groupedResponses.add(result);
		}
		return ResponseEntity.ok(groupedResponses);

	}

	@GetMapping("/groupResponses")
	public ResponseEntity<List<CandidateACResult>> getAssessmentCentreResponseGrouped() {
		logger.info("Return a custom result set1");
		List<AssessmentCentreResponse> responses = assessmentCentreResponseRepo.findAll();
		List<CandidateACResult> groupedResponses = new ArrayList<>();
		for (AssessmentCentreResponse response : responses) {
			if (groupedResponses.stream().filter(acResult->acResult.getCandidate().equals(response.getCandidate())).count()!=0) {
				logger.info("If there already is an entry for this candidate");
				for (CandidateACResult row : groupedResponses) {
					if (row.getCandidate().equals(response.getCandidate())) {
						if (response.getQuestion().getQuestionType().equals(QuestionType.GENERAL)) {
							row.setGeneral(row.getGeneral() + response.getPoints());
						} else if (response.getQuestion().getQuestionType().equals(QuestionType.TECHNICAL)) {
							row.setTechnical(row.getTechnical() + response.getPoints());
						} else if (response.getQuestion().getQuestionType().equals(QuestionType.BEHAVIOURAL)) {
							row.setBehavioural(row.getBehavioural() + response.getPoints());
						} else if (response.getQuestion().getQuestionType().equals(QuestionType.CURVEBALL)) {
							row.setCurveball(row.getCurveball() + response.getPoints());
						}
					row.setOverall(row.getOverall() + response.getPoints());
					}
				}
			} else {
				CandidateACResult result = new CandidateACResult();
				result.setCandidate(response.getCandidate());
				result.setInterviewer(response.getInterviewer());
				result.setQuestion(response.getQuestion());
				if (response.getQuestion().getQuestionType().equals(QuestionType.GENERAL)) {
					result.setGeneral(response.getPoints());
				} else if (response.getQuestion().getQuestionType().equals(QuestionType.TECHNICAL)) {
					result.setTechnical(response.getPoints());
				} else if (response.getQuestion().getQuestionType().equals(QuestionType.BEHAVIOURAL)) {
					result.setBehavioural(response.getPoints());
				} else if (response.getQuestion().getQuestionType().equals(QuestionType.CURVEBALL)) {
					result.setCurveball(response.getPoints());
				}
				result.setOverall(response.getPoints());
				groupedResponses.add(result);
			}
		}
		return ResponseEntity.ok(groupedResponses);

	}
	
	
}
