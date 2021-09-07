package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.model.Candidate;
import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/candidate/api/v1/")
public class CandidateController {

	@Autowired
	private CandidateRepository candidateRepo;
	
	public CandidateController(CandidateRepository candidateRepo) {
		super();
		this.candidateRepo = candidateRepo;
	}
	
	@GetMapping("/all")
	public List<Candidate> getAllCandidates(){
		return candidateRepo.findAll();
	}
	
	@PostMapping("/create")
	public Candidate createCandidate(@RequestBody Candidate candidate) {
		return candidateRepo.save(candidate);
	}
}


	
	