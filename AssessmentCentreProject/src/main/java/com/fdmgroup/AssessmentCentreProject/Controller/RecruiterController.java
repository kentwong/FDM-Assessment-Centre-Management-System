package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.model.Recruiter;
import com.fdmgroup.AssessmentCentreProject.repository.RecruiterRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/recruiter/api/v1/")
public class RecruiterController {

	@Autowired
	private RecruiterRepository recruiterRepo;
	
	public RecruiterController(RecruiterRepository recruiterRepo) {
		super();
		this.recruiterRepo = recruiterRepo;
	}

	@GetMapping("/all")
	public ResponseEntity<List<Recruiter>> getAllRecruiters() {
		List<Recruiter> staff = recruiterRepo.findAll();
		return ResponseEntity.ok(staff);
	}
}
