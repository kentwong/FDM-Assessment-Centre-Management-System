package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.exception.ResourceNotFoundException;
import com.fdmgroup.AssessmentCentreProject.model.Candidate;
import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/candidate/api/v1/")
public class CandidateController {

	private static Logger logger = LogManager.getLogger(CandidateController.class);
	
	@Autowired
	private CandidateRepository candidateRepo;
	
	public CandidateController(CandidateRepository candidateRepo) {
		super();
		this.candidateRepo = candidateRepo;
	}
	
	/**
	 * The getAllCandidates method return the list of all Candidate objects.
	 * 
	 * @return List of Candidate Objects
	 */
	@GetMapping("/all")
	public ResponseEntity<List<Candidate>> getAllCandidates(){
		logger.info("GET request for /all");
		return ResponseEntity.ok(candidateRepo.findAll());
	}
	
	/**
	 * The createCandidate method will save the new Candidate in the database
	 * 
	 * @param candidate New Candidate's object
	 * @return Candidate object
	 */
	@PostMapping("/create")
	public ResponseEntity<Candidate> createCandidate(@RequestBody Candidate candidate) {
		logger.info("POST request for /create");
		return ResponseEntity.ok(candidateRepo.save(candidate));
	}
	
	/**
	 * The getCandidateById method returns candidate with the specified
	 * ID in path variable. 
	 * 
	 * @param id Candidate's ID
	 * @return ResponseEntity of Candidate
	 */
	@GetMapping("/id/{id}")
	public ResponseEntity<Candidate> getCandidateById(@PathVariable Integer id) {
		logger.info("GET request for /id/" + id.toString());
		Candidate candidate = candidateRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Candidate does not exist with id : " + id));
		
		return ResponseEntity.ok(candidate);
	}
	
	/**
	 * The updateCandidate method will update the all properties of the candidate with ID
	 * specified in path variable. 
	 * 
	 * @param id Candidate's ID
	 * @param candidateUpdates Updated candidate object with new details
	 * @return ResponseEntity of Candidate
	 */
	@PutMapping("/id/{id}")
	public ResponseEntity<Candidate> updateCandidate(@PathVariable Integer id, @RequestBody Candidate candidateUpdates) {
		logger.info("PUT request for /id/" + id.toString());
		Candidate candidate = candidateRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Candidate does not exist with id : " + id));
		
		candidate.setAddress(candidateUpdates.getAddress());
		candidate.setAptitudeScore(candidateUpdates.getAptitudeScore());
		candidate.setCv(candidateUpdates.getCv());
		candidate.setDateOfBirth(candidateUpdates.getDateOfBirth());
		candidate.setEmail(candidateUpdates.getEmail());
		candidate.setFirstName(candidateUpdates.getFirstName());
		candidate.setLastName(candidateUpdates.getLastName());
		candidate.setNotes(candidateUpdates.getNotes());
		candidate.setPhoneNumber(candidateUpdates.getPhoneNumber());
		candidate.setRecruiter(candidateUpdates.getRecruiter());
		candidate.setStream(candidateUpdates.getStream());
		candidate.setUniversity(candidateUpdates.getUniversity());
		candidate.setStatus(candidateUpdates.getStatus());
		
		Candidate updatedCandidate = candidateRepo.save(candidate);
		return ResponseEntity.ok(updatedCandidate);
	}
	
	/**
	 * The deleteCandidate method delete the candidate with the specified id in
	 * the path variable. 
	 * 
	 * @param id Candidate's ID
	 * @return ResponseEntity of Map stating if deleted is true
	 */
	@DeleteMapping("/id/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCandidate(@PathVariable Integer id) {
		logger.info("DELETE request for /id/" + id.toString());
		Candidate candidate = candidateRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Candidate does not exist with id : " + id));
		
		candidateRepo.delete(candidate);
	
		Map<String, Boolean> res = new HashMap<>();
		res.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(res);
	}
}


	
	