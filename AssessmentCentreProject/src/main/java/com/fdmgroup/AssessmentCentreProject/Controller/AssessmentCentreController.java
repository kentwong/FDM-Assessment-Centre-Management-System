package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.model.ACCoordinator;
import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentre;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/assessmentCentre/api/v1")
public class AssessmentCentreController {
	
	@Autowired
	private AssessmentCentreRepository acRepo;
	
	public AssessmentCentreController(AssessmentCentreRepository acRepo) {
		super();
		this.acRepo = acRepo;
	}
	
	@GetMapping("/all")
	public List<AssessmentCentre> getAllAssessmentCentres(){
		return acRepo.findAll();
	}
	
//	@PostMapping("/create")
//	public AssessmentCentre createAc(@RequestBody AssessmentCentre ac) {
//		return acRepo.save(ac);
//	}
	
}
