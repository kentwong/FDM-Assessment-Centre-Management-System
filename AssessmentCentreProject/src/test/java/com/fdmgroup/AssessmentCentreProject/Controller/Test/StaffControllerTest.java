package com.fdmgroup.AssessmentCentreProject.Controller.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.fdmgroup.AssessmentCentreProject.Controller.StaffController;
import com.fdmgroup.AssessmentCentreProject.model.LoggedInDetails;
import com.fdmgroup.AssessmentCentreProject.model.LoginDetails;
import com.fdmgroup.AssessmentCentreProject.model.Recruiter;
import com.fdmgroup.AssessmentCentreProject.model.Staff;
import com.fdmgroup.AssessmentCentreProject.repository.StaffRepository;
import com.fdmgroup.AssessmentCentreProject.model.ACCoordinator;
import com.fdmgroup.AssessmentCentreProject.model.Interviewer;

@ExtendWith(MockitoExtension.class)
public class StaffControllerTest {
	
	@Mock
	private StaffRepository mockStaffRepo;
	

	private StaffController staffController;
	
	@BeforeEach
	public void setup() {
		staffController = new StaffController(mockStaffRepo);
	}
	
	@Test
	public void that_postRequestLogin_willReturnNullIfNoStaffMemberisFoundFromEmail() {
		LoginDetails loginDetails = new LoginDetails();
		loginDetails.setEmailAddress("steph@mail");
		
		LoggedInDetails returned = staffController.validateUser(loginDetails);
		
		assertEquals(returned, null);
	}
	
	@Test
	public void that_postRequestLogin_ReturnsNullIfPasswordDoesNotMatch() {
		LoginDetails loginDetails = new LoginDetails();
		loginDetails.setEmailAddress("steph@mail");
		loginDetails.setPassword("password");
		Staff staff = new Interviewer();
		staff.setEmail("steph@mail");
		staff.setEncyptedPassword("incorrect");
		when(mockStaffRepo.findByEmail(loginDetails.getEmailAddress())).thenReturn(Optional.of(staff));

		
		LoggedInDetails returned = staffController.validateUser(loginDetails);
		
		verify(mockStaffRepo).findByEmail(loginDetails.getEmailAddress());
		assertEquals(returned, null);
	}
	
	@Test
	public void that_postRequestLogin_findsStaffByEmail_andChecksPassword_AndReturnsStaffId_andInterviewerRole() {
		LoginDetails loginDetails = new LoginDetails();
		loginDetails.setEmailAddress("steph@mail");
		loginDetails.setPassword("password");
		Interviewer staff = new Interviewer();
		staff.setEmail("steph@mail");
		staff.setEncyptedPassword("password");
		
		when(mockStaffRepo.findByEmail(loginDetails.getEmailAddress())).thenReturn(Optional.of(staff));
	
		LoggedInDetails returned = staffController.validateUser(loginDetails);

		assertEquals(returned.getStaffId(), staff.getId());
		assertEquals(returned.getRole(), "interviewer");
	}
	
	@Test
	public void that_postRequestLogin_findsStaffByEmail_andChecksPassword_AndReturnsStaffId_andACCoordinatorRole() {
		LoginDetails loginDetails = new LoginDetails();
		loginDetails.setEmailAddress("steph@mail");
		loginDetails.setPassword("password");
		Staff staff = new ACCoordinator();
		staff.setEmail("steph@mail");
		staff.setEncyptedPassword("password");
		
		when(mockStaffRepo.findByEmail(loginDetails.getEmailAddress())).thenReturn(Optional.of(staff));
	
		LoggedInDetails returned = staffController.validateUser(loginDetails);

		assertEquals(returned.getStaffId(), staff.getId());
		assertEquals(returned.getRole(), "ACCoordinator");
	}
	
	@Test
	public void that_postRequestLogin_findsStaffByEmail_andChecksPassword_AndReturnsStaffId_andRecruiterRole() {
		LoginDetails loginDetails = new LoginDetails();
		loginDetails.setEmailAddress("steph@mail");
		loginDetails.setPassword("password");
		Staff staff = new Recruiter();
		staff.setEmail("steph@mail");
		staff.setEncyptedPassword("password");
		
		when(mockStaffRepo.findByEmail(loginDetails.getEmailAddress())).thenReturn(Optional.of(staff));
	
		LoggedInDetails returned = staffController.validateUser(loginDetails);

		assertEquals(returned.getStaffId(), staff.getId());
		assertEquals(returned.getRole(), "recruiter");
	}
}
