package com.fdmgroup.AssessmentCentreProject.Controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.model.ACCoordinator;
import com.fdmgroup.AssessmentCentreProject.model.ACDatesTemplate;
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

/**
 * @author Jeriel
 * The AssessmentCentreController class setups up and creates Assesment Centres.
 * It Sets the candidates and interviewers involved in the New AC.
 * It also creates a response forms that links the candidate to an interviewer 
 * and all the questions available for an interview type.
 */
/**
 * @author user
 *
 */
/**
 * @author user
 *
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/assessmentCentre/api/v1")
public class AssessmentCentreController {
	
	private Logger logger = LogManager.getLogger(AssessmentCentreController.class);

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

	/**
	 * @return a list of all ACs from DB
	 */
	@GetMapping("/all")
	public List<AssessmentCentre> getAllAssessmentCentres() {
		logger.info("GETTING all assessment centres from DB");
		return acRepo.findAll();
	}

	/**
	 * @return a list of all interviewers from DB
	 */
	@GetMapping("/allInterviewers")
	public List<Interviewer> getInterviewers() {
		logger.info("GETTING all interviewers from DB");
		return interviewerRepo.findAll();
	}

	/**
	 * retrieves the coordinator with @param userId and assigns the new AC to them 
	 */
	@PostMapping("/setAC")
	public void setCoordinator(@RequestBody Object userId) {
		Integer id = Integer.parseInt(userId.toString().replaceAll("[^0-9]", ""));
		logger.info("GETTING AC coordinator with ID: " + id);
		coordinator = coordinatorRepo.findById(id).get();
		
		// TAKE OUT
		logger.warn("--------------------");
	}
	
	/**
	 * @return the candidates not assigned to an AC
	 */
	@GetMapping("/candidates")
	public List<Candidate> getPendingCandidates() {
		List<Candidate> baseline = candidateRepo.findAll();
		List<AssessmentCentre> checker = acRepo.findAll();
		List<Candidate> tobeRemoved = new ArrayList<>();
		
		for (AssessmentCentre ac : checker) {
			tobeRemoved.addAll(ac.getCandidates());
		}
		baseline.removeAll(tobeRemoved);
		logger.info("SENDING candidates not assigned to ACs");
		return baseline;
	}

	/**
	 * sets the start @param date of the AC being created
	 */
	@PostMapping("/startDate")
	public void setupACStartDate(@RequestBody LocalDateTime date) {
		LocalDateTime start = date.plusHours(12);
		logger.warn("SET new AC START date to " + start.getHour() + ":" + start.getMinute());
		coordinator.getNewAC().setStart(start);
	}
	
	/**
	 * sets the end @param date of the AC being created
	 */
	@PostMapping("/endDate")
	public void setupACSEndDate(@RequestBody LocalDateTime date) {
		LocalDateTime end = date.plusHours(12);
		logger.warn("SET new AC END date to " + end.getHour() + ":" + end.getMinute());
		coordinator.getNewAC().setEnd(end);
	}
	
	/**
	 * sets the candidates of the AC being created with @param candidateIds
	 */
	@PostMapping("/acCandidates")
	public void setupACCandidates(@RequestBody List<Integer> candidateIds) {
		Set<Integer> distinct = new HashSet<Integer>(candidateIds);
		List<Integer> finalCandidatesIds = new ArrayList<>();
		for (Integer id : distinct) {
			if (Collections.frequency(candidateIds, id) % 2 != 0) {
				finalCandidatesIds.add(id);
			}
		}
		List<Candidate> candidates = new ArrayList<>();
		for (Integer id : finalCandidatesIds) {
			candidates.add(candidateRepo.getById(id));
		}
		coordinator.assignCandidates(candidates);
		logger.info("SETTING " + coordinator.getNewAC().getCandidates().size() + " candidates to new AC");
	}

	/**
	 * sets the interviewers of the AC being created with @param interviewerIds
	 */
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
		coordinator.assignInterviewers(interviewers);
		logger.info("SETTING " + coordinator.getNewAC().getInterviewers().size() + " interviewers to new AC");
	}

	/**
	 * @return the candidates selected to be in the AC being created
	 */
	@GetMapping("/selectedCandidates")
	public List<Candidate> getSelectedCandidates() {
		List<Candidate> candidates = coordinator.getNewAC().getCandidates();
		List<Candidate> result = new ArrayList<>();
		for (Candidate candidate : candidates) {
			result.add((Candidate) candidateRepo.findById(candidate.getId()).orElseThrow());
		}
		logger.info("SENDING selected candidates for new AC");
		return result;
	}

	/**
	 * @return the interviewers seleceted to be in the AC being created
	 */
	@GetMapping("/selectedInterviewers")
	public List<Interviewer> getSelectedInterviewers() {
		List<Interviewer> interviewers = coordinator.getNewAC().getInterviewers();
		List<Interviewer> result = new ArrayList<>();
		for (Interviewer interviewer : interviewers) {
			result.add((Interviewer) interviewerRepo.findById(interviewer.getId()).orElseThrow());
		}
		logger.info("SENDING selected interviewers for new AC");
		return result;
	}

	/**
	 * gets @param responses which links each candidate to an interviewer for each interview type and associates all related questions
	 * then, associates the final AC to a coordinator and saves to DB
	 */
	@PostMapping("/createAC")
	public void createAssessmentCentre(@RequestBody List<ResponseTemplate> responses) {
		logger.info("GETTING all questions and separating by type");
		List<Question> questions = questionRepo.findAll();
		List<Question> technicalQs = questions.stream().filter(q -> q.getQuestionType() == QuestionType.TECHNICAL)
				.collect(Collectors.toList());
		List<Question> hrQs = questions.stream().filter(q -> q.getQuestionType() == QuestionType.BEHAVIOURAL)
				.collect(Collectors.toList());
		List<Question> salesQs = questions.stream().filter(q -> q.getQuestionType() == QuestionType.GENERAL)
				.collect(Collectors.toList());
		
		for (ResponseTemplate temp : responses) {			
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
		coordinator.getNewAC().setCoordinator(coordinator);
		coordinator.saveAssessmentCentre();
		coordinator.setAssessmentCentres(coordinator.getAssessmentCentres());
		coordinatorRepo.save(coordinator);
		logger.info("SAVING new Assessment Centre");
	}

	/**
	 * @param dates contains the id of the AC to be updated and the start and end dates to changed to
	 * it then updates the AC and saves the changes to the DB
	 */
	@PostMapping("/updateAC")
	public void updateAssessmentCentreDates(@RequestBody ACDatesTemplate dates) {
		logger.info("UPDATING ac with id " + dates.getId() + " to have the start date to be " + dates.getStart() + " and have the end date to be " + dates.getEnd());
		AssessmentCentre ac = acRepo.findById(dates.getId()).get();
		ac.setStart(dates.getStart().plusHours(12));
		ac.setEnd(dates.getEnd().plusHours(12));
		acRepo.save(ac);
	}
	
//	@PostMapping("/deleteAC")
//	public void deleteAssessmentCentre(@RequestBody Object acId) {
//		
//		String[] splitString = (acId.toString()).split(",");
//		
//		Integer coordinatorID = Integer.parseInt(splitString[0].replaceAll("[^0-9]", ""));
//		Integer acID =  Integer.parseInt(splitString[1].replaceAll("[^0-9]", ""));
//		
//		coordinator = coordinatorRepo.getById(coordinatorID);
//		
//		List<AssessmentCentre> currentACs = coordinator.getAssessmentCentres();
//		List<AssessmentCentre>tobeDeleted = new ArrayList<>();
//		System.out.println("BEFORE: Coordinator: " + coordinator + ", AClist size: " + currentACs.size());;
//		
//		for (AssessmentCentre assessmentCentre : currentACs) {
//			if (assessmentCentre.getId() == acID) {
//				tobeDeleted.add(assessmentCentre);
//			}
//		}
//		currentACs.removeAll(tobeDeleted);
//		
//		System.out.println("AFTER: Coordinator: " + coordinator + ", AClist size: " + currentACs.size());;
//		
//		coordinatorRepo.save(coordinator);
//		acRepo.deleteById(acID);
//	}
	
	
}
