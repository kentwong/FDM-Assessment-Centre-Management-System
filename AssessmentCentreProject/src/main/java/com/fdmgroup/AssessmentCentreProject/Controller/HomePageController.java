package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentreResponse;
import com.fdmgroup.AssessmentCentreProject.model.Candidate;
import com.fdmgroup.AssessmentCentreProject.model.LoggedInDetails;
import com.fdmgroup.AssessmentCentreProject.model.PendingStatusData;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreResponseRepository;
import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/home/api/v1/")
public class HomePageController {
	
	@Autowired
	AssessmentCentreResponseRepository assesmentCentreResponseRepo;
	@Autowired
	CandidateRepository candidateRepo;
	
	public HomePageController (AssessmentCentreResponseRepository assesmentCentreResponseRepo, CandidateRepository candidateRepo) {
		super();
		this.assesmentCentreResponseRepo = assesmentCentreResponseRepo;
		this.candidateRepo = candidateRepo;
	}
	
	@PostMapping("/home")
	public PendingStatusData getCandidateOverviewData(@RequestBody LoggedInDetails user) {
		PendingStatusData data = new PendingStatusData(candidateRepo.pendingStatusPerRecruiter("Pending CV Screening", user.getStaffId()).size(),
				candidateRepo.pendingStatusPerRecruiter("Pending Phone Screening", user.getStaffId()).size(),
				candidateRepo.pendingStatusPerRecruiter("Pending Aptitude Test", user.getStaffId()).size(),
				candidateRepo.pendingStatusPerRecruiter("Pending Video Interview", user.getStaffId()).size(),
				candidateRepo.pendingStatusPerRecruiter("Pending AC", user.getStaffId()).size(),
				candidateRepo.applicationsPending().size(),
				candidateRepo.pendingStatusPerRecruiter("Offer Letter Sent", user.getStaffId()).size(),
				candidateRepo.pendingStatusPerRecruiter("Applicant Rejected", user.getStaffId()).size());
		return data;
	}
	
//	@PostMapping("/home")

	
}
