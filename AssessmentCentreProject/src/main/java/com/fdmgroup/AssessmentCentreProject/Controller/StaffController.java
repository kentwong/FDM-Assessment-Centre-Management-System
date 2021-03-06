package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.exception.ResourceNotFoundException;
import com.fdmgroup.AssessmentCentreProject.model.ACCoordinator;
import com.fdmgroup.AssessmentCentreProject.model.Candidate;
import com.fdmgroup.AssessmentCentreProject.model.Interviewer;
import com.fdmgroup.AssessmentCentreProject.model.LoggedInDetails;
import com.fdmgroup.AssessmentCentreProject.model.LoginDetails;
import com.fdmgroup.AssessmentCentreProject.model.Recruiter;
import com.fdmgroup.AssessmentCentreProject.model.Staff;
import com.fdmgroup.AssessmentCentreProject.repository.InterviewerRepository;
import com.fdmgroup.AssessmentCentreProject.repository.StaffRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/staff/api/v1/")
public class StaffController {
	
	@Autowired
	private StaffRepository staffRepo;
	
	public StaffController(StaffRepository staffRepo) {
		super();
		this.staffRepo = staffRepo;
	}
	
	@PostMapping("/login")
	public LoggedInDetails validateUser(@RequestBody LoginDetails user ) {
		Optional<Staff> staff = staffRepo.findByEmail(user.getEmailAddress());
		//encode password and check that it matches
		if (staff.isPresent() && staff.get().getEncyptedPassword().equals(user.getPassword())) {
			
			if (staff.get() instanceof Interviewer) {
				return new LoggedInDetails(staff.get().getId(), "interviewer", staff.get().getFirstName());
			}
			else if (staff.get() instanceof Recruiter) {
				return new LoggedInDetails(staff.get().getId(), "recruiter", staff.get().getFirstName());
			}
			else if (staff.get() instanceof ACCoordinator) {
				return new LoggedInDetails(staff.get().getId(), "ACCoordinator", staff.get().getFirstName());
			}
		}
		return null;
		
	}
	
	@PutMapping("/update")
	public Staff updateStaff(@RequestBody Staff staffUpdates) {
		
		return staffRepo.save(staffUpdates);
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<Staff> getStaffById(@PathVariable Integer id) {

		Staff staff = staffRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Staff does not exist with id : " + id));
		
		return ResponseEntity.ok(staff);
	}
}
