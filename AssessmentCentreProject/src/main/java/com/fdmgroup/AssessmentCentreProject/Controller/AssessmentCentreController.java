package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.hibernate.internal.build.AllowSysOut;
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
import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentreResponse;
import com.fdmgroup.AssessmentCentreProject.model.Candidate;
import com.fdmgroup.AssessmentCentreProject.model.Interviewer;
import com.fdmgroup.AssessmentCentreProject.model.Question;
import com.fdmgroup.AssessmentCentreProject.model.ResponseTemplate;
import com.fdmgroup.AssessmentCentreProject.model.enums.QuestionType;
import com.fdmgroup.AssessmentCentreProject.repository.ACCoordinatorRepository;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreRepository;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreResponseRepository;
import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;
import com.fdmgroup.AssessmentCentreProject.repository.InterviewerRepository;
import com.fdmgroup.AssessmentCentreProject.repository.QuestionRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/assessmentCentre/api/v1")
public class AssessmentCentreController {

	private AssessmentCentreRepository acRepo;
	private ACCoordinatorRepository coordinatorRepo;
	private CandidateRepository candidateRepo;
	private InterviewerRepository interviewerRepo;
	private QuestionRepository questionRepo;
	private AssessmentCentreResponseRepository responseRepo;

	private ACCoordinator coordinator;

	@Autowired
	public AssessmentCentreController(AssessmentCentreRepository acRepo, ACCoordinatorRepository coordinatorRepo,
			CandidateRepository candidateRepo, InterviewerRepository interviewerRepo, QuestionRepository questionRepo, AssessmentCentreResponseRepository responseRepo) {
		super();
		this.acRepo = acRepo;
		this.coordinatorRepo = coordinatorRepo;
		this.candidateRepo = candidateRepo;
		this.interviewerRepo = interviewerRepo;
		this.questionRepo = questionRepo;
		this.responseRepo = responseRepo;
	}

	@GetMapping("/all")
	public List<AssessmentCentre> getAllAssessmentCentres() {
		return acRepo.findAll();
	}

	@GetMapping("/allInterviewers")
	public List<Interviewer> getInterviewers() {
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

	@GetMapping("/selectedCandidates")
	public List<Candidate> getSelectedCandidates() {
//		System.out.println("WORKING: " + coordinator);
		List<Candidate> candidates = coordinator.getNewAC().getCandidates();
		List<Candidate> result = new ArrayList<>();
		for (Candidate candidate : candidates) {
			System.out.println("CANDIDATE: " + candidate.getFirstName());
			result.add((Candidate) candidateRepo.findById(candidate.getId()).orElseThrow());
		}
//		System.out.println("RESULTS: " + result.size());
		return result;
	}

	@GetMapping("/selectedInterviewers")
	public List<Interviewer> getSelectedInterviewers() {
		System.out.println("WORKING: " + coordinator);
		List<Interviewer> interviewers = coordinator.getNewAC().getInterviewers();
		List<Interviewer> result = new ArrayList<>();
		for (Interviewer interviewer : interviewers) {
			System.out.println("INTERVIEWER: " + interviewer.getFirstName());
			result.add((Interviewer) interviewerRepo.findById(interviewer.getId()).orElseThrow());
		}
		return result;
	}

	@PostMapping("/createAC")
	public void createAssessmentCentre(@RequestBody List<ResponseTemplate> responses) {
		// get questions from question bank --> separate by type --> assign to interview
		// type
		List<Question> questions = questionRepo.findAll();
		List<Question> technicalQs = questions.stream().filter(q -> q.getQuestionType() == QuestionType.TECHNICAL)
				.collect(Collectors.toList());
		List<Question> hrQs = questions.stream().filter(q -> q.getQuestionType() == QuestionType.BEHAVIOURAL)
				.collect(Collectors.toList());
		List<Question> salesQs = questions.stream().filter(q -> q.getQuestionType() == QuestionType.GENERAL)
				.collect(Collectors.toList());
		
		System.out.println("TECHNICAL Qs = " + technicalQs.size());
		System.out.println("HR Qs = " + hrQs.size());
		System.out.println("SALES Qs = " + salesQs.size());
		
		for (ResponseTemplate temp : responses) {
			System.out.println("TEMPLATE: " + temp);
			

			if (temp.getInterviewType().equals("1")) {
				// TECHNICAL
				for (Question q : technicalQs) {
					AssessmentCentreResponse response = new AssessmentCentreResponse();
					
					response.setCandidate((candidateRepo.findById(Integer.parseInt(temp.getCandidate())).get()));
					response.setInterviewer((interviewerRepo.findById(Integer.parseInt(temp.getInterviewer()))).get());
					
					response.setQuestion(q);
					responseRepo.save(response);
				}
			} else if (temp.getInterviewType().equals("2")) {
				// HR
				for (Question q : hrQs) {
					AssessmentCentreResponse response = new AssessmentCentreResponse();
					response.setCandidate((candidateRepo.findById(Integer.parseInt(temp.getCandidate())).get()));
					response.setInterviewer((interviewerRepo.findById(Integer.parseInt(temp.getInterviewer()))).get());
					
					response.setQuestion(q);
					responseRepo.save(response);
				}
			} else if (temp.getInterviewType().equals("3")){
				// SALES
				for (Question q : salesQs) {
					AssessmentCentreResponse response = new AssessmentCentreResponse();
					response.setCandidate((candidateRepo.findById(Integer.parseInt(temp.getCandidate())).get()));
					response.setInterviewer((interviewerRepo.findById(Integer.parseInt(temp.getInterviewer()))).get());
					
					response.setQuestion(q);
					responseRepo.save(response);
				}
			}
		}
	}

}
