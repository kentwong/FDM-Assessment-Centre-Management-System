package com.fdmgroup.AssessmentCentreProject.Controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.anyInt;
import static org.mockito.Mockito.atLeast;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.fdmgroup.AssessmentCentreProject.model.ACCoordinator;
import com.fdmgroup.AssessmentCentreProject.model.ACOverviewData;
import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentre;
import com.fdmgroup.AssessmentCentreProject.model.Candidate;
import com.fdmgroup.AssessmentCentreProject.model.Interviewer;
import com.fdmgroup.AssessmentCentreProject.model.LoggedInDetails;
import com.fdmgroup.AssessmentCentreProject.model.PendingStatusData;
import com.fdmgroup.AssessmentCentreProject.repository.AssessmentCentreRepository;
import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;

import java.time.LocalDateTime;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@ContextConfiguration(classes = {HomePageController.class})
@ExtendWith(SpringExtension.class)
public class HomePageControllerTest {
    @MockBean
    private AssessmentCentreRepository assessmentCentreRepository;

    @MockBean
    private CandidateRepository candidateRepository;

    @Autowired
    private HomePageController homePageController;

    @Test
    public void testConstructor() {
        HomePageController actualHomePageController = new HomePageController(mock(AssessmentCentreRepository.class), mock(CandidateRepository.class));

        assertNull(actualHomePageController.getMostRecent());
        ACOverviewData aCOverviewData = actualHomePageController.getACOverviewData();
        assertEquals(0, aCOverviewData.getCompletedAcs());
        assertEquals(0, aCOverviewData.getUnasignedApplicants());
        assertEquals(0, aCOverviewData.getUpcomingAcs());
    }

    @Test
    public void testGetCandidateOverviewData() {
        CandidateRepository candidateRepository = mock(CandidateRepository.class);
        when(candidateRepository.applicationsPending()).thenReturn(new ArrayList<Candidate>());
        when(candidateRepository.pendingStatusPerRecruiter((String) any(), anyInt())).thenReturn(new ArrayList<Candidate>());
        HomePageController homePageController = new HomePageController(mock(AssessmentCentreRepository.class), candidateRepository);
        PendingStatusData actualCandidateOverviewData = homePageController.getCandidateOverviewData(new LoggedInDetails(123, "Role", "Name"));
        assertEquals(0, actualCandidateOverviewData.getAc());
        assertEquals(0, actualCandidateOverviewData.getVideoInterview());
        assertEquals(0, actualCandidateOverviewData.getRejectedApplications());
        assertEquals(0, actualCandidateOverviewData.getPhoneScreening());
        assertEquals(0, actualCandidateOverviewData.getOffers());
        assertEquals(0, actualCandidateOverviewData.getNewApplications());
        assertEquals(0, actualCandidateOverviewData.getCv());
        assertEquals(0, actualCandidateOverviewData.getAptitudeTest());
        verify(candidateRepository).applicationsPending();
        verify(candidateRepository, atLeast(1)).pendingStatusPerRecruiter((String) any(), anyInt());
        assertNull(homePageController.getMostRecent());
    }

    @Test
    public void testGetACOverviewData() throws Exception {
        when(this.candidateRepository.candidatesWithoutACS()).thenReturn(new ArrayList<Candidate>());
        when(this.assessmentCentreRepository.completedACS()).thenReturn(new ArrayList<AssessmentCentre>());
        when(this.assessmentCentreRepository.upcomingACS()).thenReturn(new ArrayList<AssessmentCentre>());
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/home/api/v1/home");
        MockMvcBuilders.standaloneSetup(this.homePageController).build().perform(requestBuilder).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().contentType("application/json")).andExpect(MockMvcResultMatchers.content().string("{\"unasignedApplicants\":0,\"upcomingAcs\":0,\"completedAcs\":0}"));
    }

    @Test
    public void testGetMostRecent() throws Exception {
        AssessmentCentre assessmentCentre = new AssessmentCentre();
        assessmentCentre.setCoordinator(new ACCoordinator());
        assessmentCentre.setStart(LocalDateTime.of(1, 1, 1, 1, 1));
        assessmentCentre.setId(1);
        assessmentCentre.setInterviewers(new ArrayList<Interviewer>());
        assessmentCentre.setEnd(LocalDateTime.of(1, 1, 1, 1, 1));
        assessmentCentre.setCandidates(new ArrayList<Candidate>());

        ACCoordinator acCoordinator = new ACCoordinator();
        acCoordinator.setLastName("Doe");
        acCoordinator.setEmail("jane.doe@example.org");
        acCoordinator.setId(1);
        acCoordinator.assignCandidates(new ArrayList<Candidate>());
        acCoordinator.setPhoneNumber("4105551212");
        acCoordinator.setEncyptedPassword("iloveyou");
        acCoordinator.assignInterviewers(new ArrayList<Interviewer>());
        acCoordinator.setAssessmentCentres(new ArrayList<AssessmentCentre>());
        acCoordinator.setFirstName("Jane");
        acCoordinator.setNewAC(assessmentCentre);

        AssessmentCentre assessmentCentre1 = new AssessmentCentre();
        assessmentCentre1.setCoordinator(acCoordinator);
        assessmentCentre1.setStart(LocalDateTime.of(1, 1, 1, 1, 1));
        assessmentCentre1.setId(1);
        assessmentCentre1.setInterviewers(new ArrayList<Interviewer>());
        assessmentCentre1.setEnd(LocalDateTime.of(1, 1, 1, 1, 1));
        assessmentCentre1.setCandidates(new ArrayList<Candidate>());

        ACCoordinator acCoordinator1 = new ACCoordinator();
        acCoordinator1.setLastName("Doe");
        acCoordinator1.setEmail("jane.doe@example.org");
        acCoordinator1.setId(1);
        acCoordinator1.assignCandidates(new ArrayList<Candidate>());
        acCoordinator1.setPhoneNumber("4105551212");
        acCoordinator1.setEncyptedPassword("iloveyou");
        acCoordinator1.assignInterviewers(new ArrayList<Interviewer>());
        acCoordinator1.setAssessmentCentres(new ArrayList<AssessmentCentre>());
        acCoordinator1.setFirstName("Jane");
        acCoordinator1.setNewAC(assessmentCentre1);

        AssessmentCentre assessmentCentre2 = new AssessmentCentre();
        assessmentCentre2.setCoordinator(acCoordinator1);
        assessmentCentre2.setStart(LocalDateTime.of(1, 1, 1, 1, 1));
        assessmentCentre2.setId(1);
        assessmentCentre2.setInterviewers(new ArrayList<Interviewer>());
        assessmentCentre2.setEnd(LocalDateTime.of(1, 1, 1, 1, 1));
        assessmentCentre2.setCandidates(new ArrayList<Candidate>());
        when(this.assessmentCentreRepository.mostRecentAC()).thenReturn(assessmentCentre2);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/home/api/v1/hom");
        MockMvcBuilders.standaloneSetup(this.homePageController).build().perform(requestBuilder).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().contentType("application/json")).andExpect(MockMvcResultMatchers.content().string("{\"id\":1,\"start\":[1,1,1,1,1],\"end\":[1,1,1,1,1],\"coordinator\":{\"type\":\"accoordinator\",\"id\":1,\"firstName" + "\":\"Jane\",\"lastName\":\"Doe\",\"email\":\"jane.doe@example.org\",\"encyptedPassword\":\"f25a2fc72690b780b2a14e140ef6a9e0" + "\",\"phoneNumber\":\"4105551212\",\"newAC\":{\"id\":1,\"start\":[1,1,1,1,1],\"end\":[1,1,1,1,1],\"coordinator\":{" + "\"type\":\"accoordinator\",\"id\":1,\"firstName\":\"Jane\",\"lastName\":\"Doe\",\"email\":\"jane.doe@example.org\"," + "\"encyptedPassword\":\"f25a2fc72690b780b2a14e140ef6a9e0\",\"phoneNumber\":\"4105551212\",\"newAC\":{\"id\":1,\"start" + "\":[1,1,1,1,1],\"end\":[1,1,1,1,1],\"coordinator\":{\"type\":\"accoordinator\",\"id\":0,\"firstName\":null,\"lastName" + "\":null,\"email\":null,\"encyptedPassword\":null,\"phoneNumber\":null,\"newAC\":{\"id\":0,\"start\":null,\"end\":null" + ",\"coordinator\":null,\"candidates\":null,\"interviewers\":null}},\"candidates\":[],\"interviewers\":[]}}," + "\"candidates\":[],\"interviewers\":[]}},\"candidates\":[],\"interviewers\":[]}"));
    }
}