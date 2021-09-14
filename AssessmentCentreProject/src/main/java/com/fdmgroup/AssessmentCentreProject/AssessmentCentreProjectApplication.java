package com.fdmgroup.AssessmentCentreProject;

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
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreResponseRepository;
import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;
import com.fdmgroup.AssessmentCentreProject.repository.InterviewerRepository;
import com.fdmgroup.AssessmentCentreProject.repository.QuestionRepository;
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
	private QuestionRepository questionRepo;
	@Autowired
	private StaffRepository staffRepo;
	@Autowired
	private AssessmentCentreRepository acRepo;
	@Autowired
	private AssessmentCentreResponseRepository acrRepo;
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
		
		// Keep the setId() because this is just a demo info. 
		// It will be duplicated if there is no id set when we run the Java application the 2nd time.
		// Recruiter x 3ppl -> Real names
		Staff staff1 = new Recruiter();
		staff1.setId(1);
		staff1.setFirstName("Hannah");
		staff1.setLastName("Cope");
		staff1.setEmail("hannah.cope@fdmgroup.com");
		staff1.setPhoneNumber("0444555666");
		staff1.setEncyptedPassword("password");
		staffRepo.save(staff1);
		
		Staff staff2 = new Recruiter();
		staff2.setId(2);
		staff2.setFirstName("Caitlin");
		staff2.setLastName("Hargraves");
		staff2.setEmail("caitlin.hargraves@fdmgroup.com");
		staff2.setPhoneNumber("0411222333");
		staff2.setEncyptedPassword("password");
		staffRepo.save(staff2);
		
		Staff staff3 = new Recruiter();
		staff3.setId(3);
		staff3.setFirstName("Celina");
		staff3.setLastName("Gonzales");
		staff3.setEmail("celina.gonzales@fdmgroup.com");
		staff3.setPhoneNumber("0422333444");
		staff3.setEncyptedPassword("password");
		staffRepo.save(staff3);
		
		// Interviewer x 6ppl -> for HR, Sales, Technical interviews - Real names
		Staff int1 = new Interviewer();
		int1.setId(4);
		int1.setFirstName("Matthew"); //Technical
		int1.setLastName("Hircock");
		int1.setEmail("matthew.hircock@fdmgroup.com");
		int1.setPhoneNumber("0411555999");
		int1.setEncyptedPassword("password");
		staffRepo.save(int1);
		
		Staff int2 = new Interviewer();
		int2.setId(5);
		int2.setFirstName("Dylan"); //Technical
		int2.setLastName("Yoo");
		int2.setEmail("dylan.yoo@fdmgroup.com");
		int2.setPhoneNumber("0422666888");
		int2.setEncyptedPassword("password");
		staffRepo.save(int2);
		
		Staff int3 = new Interviewer();
		int3.setId(6);
		int3.setFirstName("Edwina"); //HR
		int3.setLastName("Than-Aye");
		int3.setEmail("edwina.than-aye@fdmgroup.com");
		int3.setPhoneNumber("0444555222");
		int3.setEncyptedPassword("password");
		staffRepo.save(int3);
		
		Staff int4 = new Interviewer();
		int4.setId(7);
		int4.setFirstName("Anisha"); //HR
		int4.setLastName("Balu");
		int4.setEmail("anisha.balu@fdmgroup.com");
		int4.setPhoneNumber("0466333444");
		int4.setEncyptedPassword("password");
		staffRepo.save(int4);
		
		Staff int5 = new Interviewer();
		int5.setId(8);
		int5.setFirstName("Nicholas"); //Sales - Account Manager
		int5.setLastName("Lloyd");
		int5.setEmail("nicholas.llyod@fdmgroup.com");
		int5.setPhoneNumber("0488222444");
		int5.setEncyptedPassword("password");
		staffRepo.save(int5);
		
		Staff int6 = new Interviewer();
		int6.setId(9);
		int6.setFirstName("Eoin"); //Sales - Account Manager
		int6.setLastName("Doyle");
		int6.setEmail("eoin.doyle@fdmgroup.com");
		int6.setPhoneNumber("0433666220");
		int6.setEncyptedPassword("password");
		staffRepo.save(int6);
		
		
		// Stream -> Set 4 streams for demo
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
		Staff coordinator = new ACCoordinator();
		coordinator.setId(10);
		coordinator.setFirstName("Anureet"); // Change to real name so that the stakeholder will feel more involved during presentation
		coordinator.setLastName("Kaur");
		coordinator.setEmail("anureet.kaur@fdmgroup.com");
		coordinator.setPhoneNumber("0401111252");
		coordinator.setEncyptedPassword("password");
		staffRepo.save(coordinator);
		

	}

	
}
