package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.model.ACCoordinator;
import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentre;
import com.fdmgroup.AssessmentCentreProject.model.Candidate;
import com.fdmgroup.AssessmentCentreProject.model.Interviewer;
import com.fdmgroup.AssessmentCentreProject.repository.ACCoordinatorRepository;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreRepository;
import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;
import com.fdmgroup.AssessmentCentreProject.repository.InterviewerRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/assessmentCentre/api/v1")
public class AssessmentCentreController {
	
	private AssessmentCentreRepository acRepo;
	private ACCoordinatorRepository coordinatorRepo;
	private CandidateRepository candidateRepo;
	private InterviewerRepository interviewerRepo;
	
	private ACCoordinator coordinator;
	
	@Autowired
	public AssessmentCentreController(AssessmentCentreRepository acRepo, ACCoordinatorRepository coordinatorRepo, CandidateRepository candidateRepo, InterviewerRepository interviewerRepo) {
		super();
		this.acRepo = acRepo;
		this.coordinatorRepo = coordinatorRepo;
		this.candidateRepo = candidateRepo;
		this.interviewerRepo = interviewerRepo;
	}
	
	@GetMapping("/all")
	public List<AssessmentCentre> getAllAssessmentCentres(){
		return acRepo.findAll();
	}
	
	@GetMapping("/allInterviewers")
	public List<Interviewer> getInterviewers(){
		return interviewerRepo.findAll();
	}
	
	@PostMapping("/setAC")
	public void setCoordinator(@RequestBody Object userId) {
		Integer id = Integer.parseInt(userId.toString().replaceAll("[^0-9]", ""));
		System.out.println("Coordinator ID = " + id);
		coordinator = (coordinatorRepo.findById(id)).get();
	}
	
	@PostMapping("/acCandidates")
	public void setupACCandidates(@RequestBody List<Integer> candidateIds) {
		// @RequestHeader("Authorization") Integer userId
		
		Set<Integer> distinct = new HashSet<Integer>(candidateIds);
		List<Integer> finalCandidates = new ArrayList<>();
		for (Integer id : distinct) {
			if (Collections.frequency(candidateIds, id) % 2 != 0) {
				finalCandidates.add(id);
			}
		}
		List<Candidate> candidates = new ArrayList<>();
		for (Integer id : finalCandidates) {
			candidates.add(candidateRepo.getById(id));
		}
		
		for (Candidate can : candidates) {
			System.out.println("Candidate: " + can.getFirstName() + " " + can.getLastName());
		}
		
		 coordinator.assignCandidates(candidates);
		 System.out.println("TEST CANDIDATES LIST - " + coordinator.getNewAC().getCandidates().size());
		
	}
	
	@PostMapping("/acInterviewers")
	public void setupACInterviewers(@RequestBody List<Integer> interviewerIds) {
		Set<Integer> distinct = new HashSet<Integer>(interviewerIds);
		List<Integer> finalInterviewerIds = new ArrayList<>();
		for (Integer id : distinct) {
			if (Collections.frequency(interviewerIds, id) % 2 != 0) {
				finalInterviewerIds.add(id);
			}
		}
		List<Interviewer> interviewers = new ArrayList<>();
		for (Integer id : finalInterviewerIds) {
			 interviewers.add(interviewerRepo.getById(id));
		}
		
		for (Interviewer interviewer : interviewers) {
			System.out.println("Interviewer: " + interviewer.getFirstName() + " " + interviewer.getLastName());
		}
		coordinator.assignInterviewers(interviewers);
		System.out.println("TEST INTERVIEWERS LIST - " + coordinator.getNewAC().getInterviewers().size());
	}
	
	@GetMapping("selectedCandidates")
	public List<Candidate> getSelectedCandidates(){
		System.out.print("WORKING: " + coordinator);
		List<Candidate> result = coordinator.getNewAC().getCandidates();
		for (Candidate candidate : result) {
			System.out.println(candidate);
		}
		return result;
	}
	
//	@GetMapping("selectedInterviewers")
//	public List<Interviewer> getSelectedInterviewers(){
//		return coordinator.getNewAC().getInterviewers();
//	}
	
//	@PostMapping("/create")
//	public AssessmentCentre createAc(@RequestBody AssessmentCentre ac) {
//		return acRepo.save(ac);
//	}
	
}
