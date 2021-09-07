package com.fdmgroup.AssessmentCentreProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;

@SpringBootApplication
public class AssessmentCentreProjectApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(AssessmentCentreProjectApplication.class, args);
	}

}
