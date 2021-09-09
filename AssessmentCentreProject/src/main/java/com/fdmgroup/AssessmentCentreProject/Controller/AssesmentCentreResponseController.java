
package com.fdmgroup.AssessmentCentreProject.Controller;

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
	public ResponseEntity<List<AssessmentCentreResponse>> getAssessmentCentreResponseGrouped(){
		logger.info("Return a custom query");
		return ResponseEntity.ok(assessmentCentreResponseRepo.groupedAndJoined());

		
	}
}