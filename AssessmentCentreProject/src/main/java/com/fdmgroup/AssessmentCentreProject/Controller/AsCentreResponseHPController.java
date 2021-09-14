package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentreResponse;
import com.fdmgroup.AssessmentCentreProject.model.Candidate;
import com.fdmgroup.AssessmentCentreProject.model.PendingStatusData;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreResponseRepository;
import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/home/api/v1/")
public class AsCentreResponseHPController {
	
	@Autowired
	AssessmentCentreResponseRepository assesmentCentreResponseRepo;
	@Autowired
	CandidateRepository candidateRepo;
	
	public AsCentreResponseHPController (AssessmentCentreResponseRepository assesmentCentreResponseRepo, CandidateRepository candidateRepo) {
		super();
		this.assesmentCentreResponseRepo = assesmentCentreResponseRepo;
		this.candidateRepo = candidateRepo;
	}
	
	@GetMapping("/home")
	public PendingStatusData getCandidateOverviewData() {
		System.out.println(candidateRepo.pendingStatus("Pending Video Interview").size() + "----------------------------------");
		PendingStatusData data = new PendingStatusData(candidateRepo.pendingStatus("Pending CV").size(),
				candidateRepo.pendingStatus("Pending Phone Screening").size(),
				candidateRepo.pendingStatus("Pending Aptitude Test").size(),
				candidateRepo.pendingStatus("Pending Video Interview").size(),
				candidateRepo.pendingStatus("Pending AC").size(),
				candidateRepo.applicationsPending().size(),
				candidateRepo.pendingStatus("Offer Letter Sent").size(),
				candidateRepo.pendingStatus("Applicant Rejected").size());
		return data;
	}
	
}
