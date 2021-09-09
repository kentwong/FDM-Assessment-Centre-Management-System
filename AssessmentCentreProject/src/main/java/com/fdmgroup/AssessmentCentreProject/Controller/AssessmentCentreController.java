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
import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;
import com.fdmgroup.AssessmentCentreProject.repository.InterviewerRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/assessmentCentre/api/v1")
public class AssessmentCentreController {
	
	private AssessmentCentreRepository acRepo;
	private CandidateRepository candidateRepo;
	private InterviewerRepository interviewerRepo;
	
	@Autowired
	public AssessmentCentreController(AssessmentCentreRepository acRepo, CandidateRepository candidateRepo, InterviewerRepository interviewerRepo) {
		super();
		this.acRepo = acRepo;
		this.candidateRepo = candidateRepo;
		this.interviewerRepo = interviewerRepo;
	}
	
	@GetMapping("/all")
	public List<AssessmentCentre> getAllAssessmentCentres(){
		return acRepo.findAll();
	}
	
	@PostMapping("/next")
	public void setupAC(@RequestBody List<Integer> candidateIds, @RequestBody List<Integer> interviewerIds) {
		System.out.println("*** TEST-1 ***");
//		for (Integer id : candidateIds) {
//			System.out.println("CANDIDATES - " + id);
//		}
//		for (Integer id : interviewerIds) {
//			System.out.println("INTERVIEWERS - " + id);
//		}
	}
	
//	@PostMapping("/create")
//	public AssessmentCentre createAc(@RequestBody AssessmentCentre ac) {
//		return acRepo.save(ac);
//	}
	
}
