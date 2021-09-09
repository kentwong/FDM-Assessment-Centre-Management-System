package com.fdmgroup.AssessmentCentreProject;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fdmgroup.AssessmentCentreProject.model.ACCoordinator;
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
import com.fdmgroup.AssessmentCentreProject.repository.InterviewerRepository;
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
	@Autowired
	private InterviewerRepository intRepo;
	
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
		staff1.setId(1);
		staff1.setFirstName("Mary");
		staff1.setLastName("Brown");
		staff1.setEmail("mary@fdmgroup.com");
		staff1.setPhoneNumber("0422336523");
		staffRepo.save(staff1);
		
		Stream softwareDev = new Stream(1, "Software Development", 90, AptitudeType.TECHNICAL);
		Stream businessAnalysis = new Stream(2, "Business Analysis & Business Intelligence", 90, AptitudeType.BUSINESS);
		Stream technicalAnalysis = new Stream(3, "Technical Analysis", 90, AptitudeType.TECHNICAL);
		Stream cloudComputing = new Stream(4, "Cloud Computing Engineering", 90, AptitudeType.TECHNICAL);
		streamRepo.save(softwareDev);
		streamRepo.save(businessAnalysis);
		streamRepo.save(technicalAnalysis);
		streamRepo.save(cloudComputing);
		
		candidateRepo.save(new Candidate(1, "Kent", "Wong", "1998-01-01", address1, "kent.wong@fdmgroup.com", "0478225632", "The Australian National University", "http://res.cloudinary.com/fdmgroup/image/upload/v1631021238/fdmgroup/s2getcumddnfe44tw6jg.pdf", 30, "Available to work immediately", (Recruiter) staff1, softwareDev, "Pending Video Interview"));
		candidateRepo.save(new Candidate(2, "Vincent", "Chen", "1998-02-02", address2, "vincent.chen1@fdmgroup.com", "0415236254", "The University of Sydney", "http://res.cloudinary.com/fdmgroup/image/upload/v1631023545/fdmgroup/salj3stje2hnlt60citt.pdf", 30, "Available to work immediately", (Recruiter) staff1, softwareDev, "Pending Video Interview"));
		candidateRepo.save(new Candidate(3, "Jeriel", "Bongco", "1998-03-04", address3, "jeriel.bongco@fdmgroup.com", "0452866951", "The University of Auckland", "http://res.cloudinary.com/fdmgroup/image/upload/v1631023572/fdmgroup/j0h4kq8csketvmwisrfk.pdf", 30, "Available to work immediately", (Recruiter) staff1, softwareDev, "Pending Video Interview"));
		candidateRepo.save(new Candidate(4, "Stephanie", "Hirshman", "1998-04-04", address4, "stephanie.hirshman@fdmgroup.com", "0402425863", "The University of Sydney", "http://res.cloudinary.com/fdmgroup/image/upload/v1631023592/fdmgroup/qpg8tqfo5xwaafcpy3gc.pdf", 30, "Available to work immediately", (Recruiter) staff1, softwareDev, "Pending Video Interview"));	
		candidateRepo.save(new Candidate(5, "David", "Ko", "1998-05-05", address5, "david.ko@fdmgroup.com", "0401230547", "The University of Auckland", "http://res.cloudinary.com/fdmgroup/image/upload/v1631023614/fdmgroup/ngsposgdizew0xd2gplm.pdf", 30, "Available to work immediately", (Recruiter) staff1, softwareDev, "Pending Video Interview"));
		
		// assessment centre testing
		AssessmentCentre ac = new AssessmentCentre();
		ac.setId(1);
//		Date date = new Date(2021, 10, 5);
//		ac.setDate(date);
		Staff coordinator = new ACCoordinator();
		coordinator.setId(10);
		coordinator.setFirstName("Michael");
		coordinator.setLastName("Mike");
		coordinator.setEmail("mike@fdm.com");
		coordinator.setPhoneNumber("1234");
		ac.setCoordinator((ACCoordinator) coordinator);
		acRepo.save(ac);
		
		Interviewer int1 = new Interviewer();
		int1.setFirstName("Steph");
		int1.setLastName("Curry");
		Interviewer int2 = new Interviewer();
		int2.setFirstName("Klay");
		int2.setLastName("Thompson");
		Interviewer int3 = new Interviewer();
		int3.setFirstName("Andre");
		int3.setLastName("Iguodala");
		Interviewer int4 = new Interviewer();
		int4.setFirstName("Dray");
		int4.setLastName("Green");
		intRepo.save(int1);
		intRepo.save(int2);
		intRepo.save(int3);
		intRepo.save(int4);
		
	}
}
