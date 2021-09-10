package com.fdmgroup.AssessmentCentreProject;

import java.util.Arrays;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import com.fdmgroup.AssessmentCentreProject.model.Address;
import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentre;
import com.fdmgroup.AssessmentCentreProject.model.Candidate;
import com.fdmgroup.AssessmentCentreProject.model.Interviewer;
import com.fdmgroup.AssessmentCentreProject.model.Recruiter;
import com.fdmgroup.AssessmentCentreProject.model.Staff;
import com.fdmgroup.AssessmentCentreProject.model.Stream;
import com.fdmgroup.AssessmentCentreProject.model.enums.AptitudeType;
import com.fdmgroup.AssessmentCentreProject.repository.AddressRepository;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreRepository;
import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;
import com.fdmgroup.AssessmentCentreProject.repository.RecruiterRepository;
import com.fdmgroup.AssessmentCentreProject.repository.StaffRepository;
import com.fdmgroup.AssessmentCentreProject.repository.StreamRepository;


@SpringBootApplication
public class AssessmentCentreProjectApplication implements CommandLineRunner {

	@Autowired
	private CandidateRepository candidateRepo;
	@Autowired
	private AddressRepository addressRepo;
	@Autowired
	private RecruiterRepository recruiterRepo;
	@Autowired
	private StreamRepository streamRepo;
	@Autowired
	private StaffRepository staffRepo;
	
	@Autowired
	private AssessmentCentreRepository acRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(AssessmentCentreProjectApplication.class, args);
	}

	/**
	 *  Preload demo data for candidates, address, recruiter, and stream
	 *  
	 */
	@Override
	public void run(String... args) throws Exception {
		
		Address address1 = new Address(1, "5 Kent St, Sydney, NSW 2000");
		Address address2 = new Address(2, "56 Pitt St, Sydney, NSW 2000");
		Address address3 = new Address(3, "20 Princes St, North Sydney, NSW 2060");
		Address address4 = new Address(4, "1 Wheeler La, North Sydney, NSW 2060");
		Address address5 = new Address(5, "193 Macquarie St, Sydney, NSW 2000");
				
		addressRepo.save(address1);
		addressRepo.save(address2);
		addressRepo.save(address3);
		addressRepo.save(address4);
		addressRepo.save(address5);
		
		Staff staff1 = new Recruiter();
		//staff1.setId(1);
		staff1.setFirstName("Mary");
		staff1.setLastName("Brown");
		staff1.setEmail("mary@fdmgroup.com");
		staff1.setPhoneNumber("0422336523");
		staff1.setEncyptedPassword("password");
		staffRepo.save(staff1);
		
		Staff staff2 = new Interviewer();
		//staff2.setId(3);
		staff2.setFirstName("John");
		staff2.setLastName("Doe");
		staff2.setEmail("john@fdmgroup.com");
		staff2.setPhoneNumber("043245671");
		staff2.setEncyptedPassword("password");
		staffRepo.save(staff2);
		
		Stream softwareDev = new Stream(1, "Software Development", new Date(), 90, AptitudeType.TECHNICAL);
		streamRepo.save(softwareDev);
		
		candidateRepo.save(new Candidate(1, "Kent", "Wong", "01/01/1998", address1, "kent.wong@fdmgroup.com", "0478225632", "The Australian National University", "http://res.cloudinary.com/fdmgroup/image/upload/v1631021238/fdmgroup/s2getcumddnfe44tw6jg.pdf", 30, "Available to work immediately", (Recruiter) staff1, softwareDev));
		
		candidateRepo.save(new Candidate(2, "Vincent", "Chen", "02/02/1998", address2, "vincent.chen1@fdmgroup.com", "0415236254", "The University of Sydney", "http://res.cloudinary.com/fdmgroup/image/upload/v1631023545/fdmgroup/salj3stje2hnlt60citt.pdf", 30, "Available to work immediately", (Recruiter) staff1, softwareDev));
		
		candidateRepo.save(new Candidate(3, "Jeriel", "Bongco", "03/03/1998", address3, "jeriel.bongco@fdmgroup.com", "0452866951", "The University of Auckland", "http://res.cloudinary.com/fdmgroup/image/upload/v1631023572/fdmgroup/j0h4kq8csketvmwisrfk.pdf", 30, "Available to work immediately", (Recruiter) staff1, softwareDev));
		
		candidateRepo.save(new Candidate(4, "Stephanie", "Hirshman", "04/04/1998", address4, "stephanie.hirshman@fdmgroup.com", "0402425863", "The University of Sydney", "http://res.cloudinary.com/fdmgroup/image/upload/v1631023592/fdmgroup/qpg8tqfo5xwaafcpy3gc.pdf", 30, "Available to work immediately", (Recruiter) staff1, softwareDev));
		
		candidateRepo.save(new Candidate(5, "David", "Ko", "05/05/1998", address5, "david.ko@fdmgroup.com", "0401230547", "The University of Auckland", "http://res.cloudinary.com/fdmgroup/image/upload/v1631023614/fdmgroup/ngsposgdizew0xd2gplm.pdf", 30, "Available to work immediately", (Recruiter) staff1, softwareDev));
		
		// assessment centre testing
		acRepo.save(new AssessmentCentre());
	}
	
	
}
