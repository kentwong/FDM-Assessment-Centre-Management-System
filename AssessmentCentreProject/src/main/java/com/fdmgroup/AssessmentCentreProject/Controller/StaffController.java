package com.fdmgroup.AssessmentCentreProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.AssessmentCentreProject.model.Staff;
import com.fdmgroup.AssessmentCentreProject.repository.StaffRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/staff/api/v1/")
public class StaffController {
	
	//@Autowired
	//private AuthenticationManager authenticationManager;
	
	@Autowired
	private StaffRepository staffRepo;
	
	public StaffController(StaffRepository staffRepo) {
		super();
		this.staffRepo = staffRepo;
	}
	
	@GetMapping("/login")
	public List<Staff> login() {
		return staffRepo.findAll();
		
	}
	
	
}
