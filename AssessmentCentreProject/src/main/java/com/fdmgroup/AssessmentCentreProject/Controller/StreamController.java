package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.model.Stream;
import com.fdmgroup.AssessmentCentreProject.repository.StreamRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/stream/api/v1/")
public class StreamController {

	private static Logger logger = LogManager.getLogger(StreamController.class);
	
	@Autowired
	private StreamRepository streamRepo;
	
	public StreamController(StreamRepository streamRepo) {
		super();
		this.streamRepo = streamRepo;
	}

	/**
	 * The getAllStreams method return the list of all Stream objects.
	 * 
	 * @return List of Stream Objects
	 */
	@GetMapping("/all")
	public ResponseEntity<List<Stream>> getAllCandidates(){
		logger.info("GET request for /all");
		return ResponseEntity.ok(streamRepo.findAll());
	}
}
