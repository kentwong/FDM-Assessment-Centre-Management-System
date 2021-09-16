
package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentreResponse;
import com.fdmgroup.AssessmentCentreProject.model.CandidateACResult;
import com.fdmgroup.AssessmentCentreProject.model.Question;
import com.fdmgroup.AssessmentCentreProject.model.enums.QuestionType;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreResponseRepository;
import com.fdmgroup.AssessmentCentreProject.repository.QuestionRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/assessmentCentreResponse/api/v1/")
public class AssesmentCentreResponseController {
	private static Logger logger = LogManager.getLogger(AssesmentCentreResponseController.class);

	@Autowired
	private AssessmentCentreResponseRepository assessmentCentreResponseRepo;

	@Autowired
	private QuestionRepository questionRepo;

	public AssesmentCentreResponseController(AssessmentCentreResponseRepository assessmentCentreResponseRepo) {
		super();
		this.assessmentCentreResponseRepo = assessmentCentreResponseRepo;
	}

	/**
	 * @return A CandidateACResult object that is the responses grouped
	 */
	@GetMapping("/groupResponses")
	public ResponseEntity<List<CandidateACResult>> getAssessmentCentreResponseGrouped() {
		logger.info("Return a custom result set");
		List<AssessmentCentreResponse> responses = assessmentCentreResponseRepo.findAll();
		List<CandidateACResult> groupedResponses = new ArrayList<>();
		for (AssessmentCentreResponse response : responses) {
			if (groupedResponses.stream().filter(acResult -> acResult.getCandidate().equals(response.getCandidate()))
					.count() != 0) {		//checks if there is already an entry for the candidate
				logger.info(
						"If there already is an entry for this candidate, adds to that entry instead of making a new one");
				for (CandidateACResult row : groupedResponses) {
					if (row.getCandidate().equals(response.getCandidate())) {		//checks if it is the correct row
						if (response.getQuestion().getQuestionType().equals(QuestionType.GENERAL)) {
							row.setGeneralTotal(row.getGeneralTotal() + response.getPoints());
							row.setGeneral(row.getGeneral() + response.getPoints());
						} else if (response.getQuestion().getQuestionType().equals(QuestionType.TECHNICAL)) {
							row.setTechnicalTotal(row.getTechnicalTotal() + response.getPoints());
							row.setTechnical(row.getTechnical() + response.getPoints());
						} else if (response.getQuestion().getQuestionType().equals(QuestionType.BEHAVIOURAL)) {
							row.setBehaviouralTotal(row.getBehaviouralTotal() + response.getPoints());
							row.setBehavioural(row.getBehavioural() + response.getPoints());
						}
						row.setOverall(row.getOverall() + response.getPoints());
					}
				}
			} else {		//if there is no entry for the candidate, one is made
				CandidateACResult result = new CandidateACResult();
				result.setCandidate(response.getCandidate());
				result.setInterviewer(response.getInterviewer());
				result.setQuestion(response.getQuestion());
				if (response.getQuestion().getQuestionType().equals(QuestionType.GENERAL)) {
					result.setGeneralTotal(response.getPoints());
					result.setGeneral(response.getPoints());
				} else if (response.getQuestion().getQuestionType().equals(QuestionType.TECHNICAL)) {
					result.setTechnicalTotal(response.getPoints());
					result.setTechnical(response.getPoints());
				} else if (response.getQuestion().getQuestionType().equals(QuestionType.BEHAVIOURAL)) {
					result.setBehaviouralTotal(response.getPoints());
					result.setBehavioural(response.getPoints());
				}
				result.setOverall(response.getPoints());
				groupedResponses.add(result);
			}
		}
		return ResponseEntity.ok(groupedResponses);

	}


	/**
	 * @param Candidate Id
	 * @return A CandidateACResult object that is the responses for an id
	 */
	@GetMapping("/groupResponse/{id}")
	public ResponseEntity<List<CandidateACResult>> getAssessmentCentreResponseGroupedForId(@PathVariable Integer id) {
		logger.info("Return a custom result set");
		List<AssessmentCentreResponse> responses = assessmentCentreResponseRepo.findAll();
		List<CandidateACResult> groupedResponses = new ArrayList<>();
		for (AssessmentCentreResponse response : responses) {
			if (response.getCandidate().getId() == id) {
				if (groupedResponses.stream()
						.filter(acResult -> acResult.getCandidate().equals(response.getCandidate())).count() != 0) {
					logger.info(
							"If there already is an entry for this candidate, adds to that entry instead of making a new one");
					for (CandidateACResult row : groupedResponses) {
						if (row.getCandidate().equals(response.getCandidate())) {
							if (response.getQuestion().getQuestionType().equals(QuestionType.GENERAL)) {
								row.setGeneralTotal(row.getGeneralTotal() + response.getPoints());
								row.setGeneral(row.getGeneral() + response.getPoints());
							} else if (response.getQuestion().getQuestionType().equals(QuestionType.TECHNICAL)) {
								row.setTechnicalTotal(row.getTechnicalTotal() + response.getPoints());
								row.setTechnical(row.getTechnical() + response.getPoints());
							} else if (response.getQuestion().getQuestionType().equals(QuestionType.BEHAVIOURAL)) {
								row.setBehaviouralTotal(row.getBehaviouralTotal() + response.getPoints());
								row.setBehavioural(row.getBehavioural() + response.getPoints());
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
						result.setGeneralTotal(response.getPoints());
						result.setGeneral(response.getPoints());
					} else if (response.getQuestion().getQuestionType().equals(QuestionType.TECHNICAL)) {
						result.setTechnicalTotal(response.getPoints());
						result.setTechnical(response.getPoints());
					} else if (response.getQuestion().getQuestionType().equals(QuestionType.BEHAVIOURAL)) {
						result.setBehaviouralTotal(response.getPoints());
						result.setBehavioural(response.getPoints());
					}
					result.setOverall(response.getPoints());
					groupedResponses.add(result);
				}
			}
		}

		return ResponseEntity.ok(groupedResponses);

	}

	/**
	 * @param Candidate Id
	 * @return List of responses for that candidate
	 */
	@GetMapping("/info/{id}")
	public ResponseEntity<List<AssessmentCentreResponse>> getResponseByCandidateId(@PathVariable Integer id) {
		logger.info("GET request for /id/" + id.toString());
		List<AssessmentCentreResponse> response = assessmentCentreResponseRepo.findByCandidateId(id);
		return ResponseEntity.ok(response);
	}

	/**
	 * @param Candidate Id
	 * @return List of general responses for that candidate
	 */
	@GetMapping("/general/{id}")
	public ResponseEntity<List<CandidateACResult>> getResponseByCandidateIdOnlyGeneral(@PathVariable Integer id) {
		logger.info("GET request for /id/" + id.toString() + "for only general questions");
		List<AssessmentCentreResponse> responses = assessmentCentreResponseRepo.findByCandidateId(id);
		List<CandidateACResult> generalResponses = new ArrayList<>();
		for (AssessmentCentreResponse response : responses) {
			if (response.getQuestion().getQuestionType().equals(QuestionType.GENERAL)) {		//only creates an entry for the candidate's general questions
				CandidateACResult generalResponse = new CandidateACResult();
				generalResponse.setGeneral(response.getPoints());
				generalResponse.setQuestion(response.getQuestion());
				generalResponse.setNotes(response.getNotes());
				generalResponse.setInterviewer(response.getInterviewer());
				if (response.getPoints() == 10) {
					generalResponse.setGrade("A+");
				}else if(response.getPoints() == 9) {
					generalResponse.setGrade("A");
				}else if(response.getPoints() == 8) {
					generalResponse.setGrade("B");
				}else if(response.getPoints() <= 7) {
					generalResponse.setGrade("C");
				}
				generalResponses.add(generalResponse);
			}
		}
		return ResponseEntity.ok(generalResponses);
	}


	/**
	 * @param Candidate Id
	 * @return List of technical responses for that candidate
	 */
	@GetMapping("/technical/{id}")
	public ResponseEntity<List<CandidateACResult>> getResponseByCandidateIdOnlyTechnical(@PathVariable Integer id) {
		logger.info("GET request for /id/" + id.toString() + "for only technical questions");
		List<AssessmentCentreResponse> responses = assessmentCentreResponseRepo.findByCandidateId(id);
		List<CandidateACResult> technicalResponses = new ArrayList<>();
		for (AssessmentCentreResponse response : responses) {
			if (response.getQuestion().getQuestionType().equals(QuestionType.TECHNICAL)) {		//only creates an entry for the candidate's technical questions
				CandidateACResult technicalResponse = new CandidateACResult();
				technicalResponse.setTechnical(response.getPoints());
				technicalResponse.setQuestion(response.getQuestion());
				technicalResponse.setNotes(response.getNotes());
				technicalResponse.setInterviewer(response.getInterviewer());
				if (response.getPoints() == 10) {
					technicalResponse.setGrade("A+");
				}else if(response.getPoints() == 9) {
					technicalResponse.setGrade("A");
				}else if(response.getPoints() == 8) {
					technicalResponse.setGrade("B");
				}else if(response.getPoints() <= 7) {
					technicalResponse.setGrade("C");
				}
				technicalResponses.add(technicalResponse);
			}
		}
		return ResponseEntity.ok(technicalResponses);
	}


	/**
	 * @param Candidate Id
	 * @return List of behavioural responses for that candidate
	 */
	@GetMapping("/behavioural/{id}")
	public ResponseEntity<List<CandidateACResult>> getResponseByCandidateIdOnlyBehavioural(@PathVariable Integer id) {
		logger.info("GET request for /id/" + id.toString() + "for only behavioural questions");
		List<AssessmentCentreResponse> responses = assessmentCentreResponseRepo.findByCandidateId(id);
		List<CandidateACResult> behaviouralResponses = new ArrayList<>();
		for (AssessmentCentreResponse response : responses) {
			if (response.getQuestion().getQuestionType().equals(QuestionType.BEHAVIOURAL)) {		//only creates an entry for the candidate's general questions
				CandidateACResult behaviouralResponse = new CandidateACResult();
				behaviouralResponse.setBehavioural(response.getPoints());
				behaviouralResponse.setQuestion(response.getQuestion());
				behaviouralResponse.setNotes(response.getNotes());
				behaviouralResponse.setInterviewer(response.getInterviewer());
				if (response.getPoints() == 10) {
					behaviouralResponse.setGrade("A+");
				}else if(response.getPoints() == 9) {
					behaviouralResponse.setGrade("A");
				}else if(response.getPoints() == 8) {
					behaviouralResponse.setGrade("B");
				}else if(response.getPoints() <= 7) {
					behaviouralResponse.setGrade("C");
				}
				behaviouralResponses.add(behaviouralResponse);
			}
		}
		return ResponseEntity.ok(behaviouralResponses);
	}

	@GetMapping("/getAllQuestions")
	public ResponseEntity<List<Question>> getAllQuestions() {
		logger.info("Return all questions");
		List<Question> questions = questionRepo.findAll();
		return ResponseEntity.ok(questions);

	}

}
