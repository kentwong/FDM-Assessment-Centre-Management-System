package com.fdmgroup.AssessmentCentreProject.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/vincenttest/api/v1")
public class VincentTEMPCONTROLLER {
	
	@GetMapping("/")
	public String testMethod() {
		System.out.println("hello");
		return "helloworld";
	}
	
}
