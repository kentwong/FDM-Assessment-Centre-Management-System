package com.fdmgroup.AssessmentCentreProject.Controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import com.fdmgroup.AssessmentCentreProject.model.Recruiter;
import com.fdmgroup.AssessmentCentreProject.repository.RecruiterRepository;

import java.util.ArrayList;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@ContextConfiguration(classes = {RecruiterController.class})
@ExtendWith(SpringExtension.class)
public class RecruiterControllerTest {
    @Autowired
    private RecruiterController recruiterController;

    @MockBean
    private RecruiterRepository recruiterRepository;

    @Test
    public void testConstructor() {
        ResponseEntity<List<Recruiter>> allRecruiters = (new RecruiterController(mock(RecruiterRepository.class))).getAllRecruiters();
        assertTrue(allRecruiters.getBody().isEmpty());
        assertEquals("<200 OK OK,[],[]>", allRecruiters.toString());
        assertTrue(allRecruiters.hasBody());
        assertEquals(200, allRecruiters.getStatusCodeValue());
        assertEquals(HttpStatus.OK, allRecruiters.getStatusCode());
        assertTrue(allRecruiters.getHeaders().isEmpty());
    }

    @Test
    public void testGetAllRecruiters() throws Exception {
        when(this.recruiterRepository.findAll()).thenReturn(new ArrayList<Recruiter>());
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/recruiter/api/v1/all");
        MockMvcBuilders.standaloneSetup(this.recruiterController).build().perform(requestBuilder).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().contentType("application/json")).andExpect(MockMvcResultMatchers.content().string("[]"));
    }
}