package com.fdmgroup.AssessmentCentreProject.Controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fdmgroup.AssessmentCentreProject.model.Address;
import com.fdmgroup.AssessmentCentreProject.model.Candidate;
import com.fdmgroup.AssessmentCentreProject.model.Recruiter;
import com.fdmgroup.AssessmentCentreProject.model.Stream;
import com.fdmgroup.AssessmentCentreProject.repository.CandidateRepository;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@ContextConfiguration(classes = {CandidateController.class})
@ExtendWith(SpringExtension.class)
public class CandidateControllerTest {
    @Autowired
    private CandidateController candidateController;

    @MockBean
    private CandidateRepository candidateRepository;

    @Test
    public void testConstructor() {
        ResponseEntity<List<Candidate>> allCandidates = (new CandidateController(mock(CandidateRepository.class))).getAllCandidates();
        assertTrue(allCandidates.getBody().isEmpty());
        assertEquals("<200 OK OK,[],[]>", allCandidates.toString());
        assertTrue(allCandidates.hasBody());
        assertEquals(200, allCandidates.getStatusCodeValue());
        assertEquals(HttpStatus.OK, allCandidates.getStatusCode());
        assertTrue(allCandidates.getHeaders().isEmpty());
    }

    @Test
    public void testCreateCandidate() throws Exception {
        Address address = new Address();
        address.setId(1);
        address.setAddress("42 Main St");

        Stream stream = new Stream();
        stream.setId(1);
        stream.setStreamName("Stream Name");

        Recruiter recruiter = new Recruiter();
        recruiter.setLastName("Doe");
        recruiter.setEmail("jane.doe@example.org");
        recruiter.setId(1);
        recruiter.setPhoneNumber("4105551212");
        recruiter.setEncyptedPassword("iloveyou");
        recruiter.setCandidates(new ArrayList<Candidate>());
        recruiter.setFirstName("Jane");

        Candidate candidate = new Candidate();
        candidate.setLastName("Doe");
        candidate.setEmail("jane.doe@example.org");
        candidate.setAddress(address);
        candidate.setNotes("Notes");
        candidate.setStream(stream);
        candidate.setId(1);
        candidate.setPhoneNumber("4105551212");
        candidate.setAptitudeScore(10.0);
        candidate.setFirstName("Jane");
        candidate.setDateOfBirth("2020-03-01");
        candidate.setStatus("Status");
        candidate.setUniversity("University");
        candidate.setRecruiter(recruiter);
        candidate.setCv("Cv");
        candidate.setHistory(new ArrayList<Candidate>());
        when(this.candidateRepository.save((Candidate) any())).thenReturn(candidate);

        Address address1 = new Address();
        address1.setId(1);
        address1.setAddress("42 Main St");

        Stream stream1 = new Stream();
        stream1.setId(1);
        stream1.setStreamName("Stream Name");

        Recruiter recruiter1 = new Recruiter();
        recruiter1.setLastName("Doe");
        recruiter1.setEmail("jane.doe@example.org");
        recruiter1.setId(1);
        recruiter1.setPhoneNumber("4105551212");
        recruiter1.setEncyptedPassword("iloveyou");
        recruiter1.setCandidates(new ArrayList<Candidate>());
        recruiter1.setFirstName("Jane");

        Candidate candidate1 = new Candidate();
        candidate1.setLastName("Doe");
        candidate1.setEmail("jane.doe@example.org");
        candidate1.setAddress(address1);
        candidate1.setNotes("Notes");
        candidate1.setStream(stream1);
        candidate1.setId(1);
        candidate1.setPhoneNumber("4105551212");
        candidate1.setAptitudeScore(10.0);
        candidate1.setFirstName("Jane");
        candidate1.setDateOfBirth("2020-03-01");
        candidate1.setStatus("Status");
        candidate1.setUniversity("University");
        candidate1.setRecruiter(recruiter1);
        candidate1.setCv("Cv");
        candidate1.setHistory(new ArrayList<Candidate>());
        String content = (new ObjectMapper()).writeValueAsString(candidate1);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.post("/candidate/api/v1/create").contentType(MediaType.APPLICATION_JSON).content(content);
        MockMvcBuilders.standaloneSetup(this.candidateController).build().perform(requestBuilder).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().contentType("application/json")).andExpect(MockMvcResultMatchers.content().string("{\"id\":1,\"firstName\":\"Jane\",\"lastName\":\"Doe\",\"dateOfBirth\":\"2020-03-01\",\"address\":{\"id\":1,\"address\":\"42" + " Main St\"},\"email\":\"jane.doe@example.org\",\"phoneNumber\":\"4105551212\",\"university\":\"University\",\"cv\":" + "\"Cv\",\"aptitudeScore\":10.0,\"notes\":\"Notes\",\"status\":\"Status\",\"stream\":{\"id\":1,\"streamName\":\"Stream" + " Name\"},\"history\":[],\"streamName\":\"Stream Name\",\"recruiterId\":1}"));
    }

    @Test
    public void testDeleteCandidate() throws Exception {
        Address address = new Address();
        address.setId(1);
        address.setAddress("42 Main St");

        Stream stream = new Stream();
        stream.setId(1);
        stream.setStreamName("Stream Name");

        Recruiter recruiter = new Recruiter();
        recruiter.setLastName("Doe");
        recruiter.setEmail("jane.doe@example.org");
        recruiter.setId(1);
        recruiter.setPhoneNumber("4105551212");
        recruiter.setEncyptedPassword("iloveyou");
        recruiter.setCandidates(new ArrayList<Candidate>());
        recruiter.setFirstName("Jane");

        Candidate candidate = new Candidate();
        candidate.setLastName("Doe");
        candidate.setEmail("jane.doe@example.org");
        candidate.setAddress(address);
        candidate.setNotes("Notes");
        candidate.setStream(stream);
        candidate.setId(1);
        candidate.setPhoneNumber("4105551212");
        candidate.setAptitudeScore(10.0);
        candidate.setFirstName("Jane");
        candidate.setDateOfBirth("2020-03-01");
        candidate.setStatus("Status");
        candidate.setUniversity("University");
        candidate.setRecruiter(recruiter);
        candidate.setCv("Cv");
        candidate.setHistory(new ArrayList<Candidate>());
        Optional<Candidate> ofResult = Optional.<Candidate>of(candidate);
        doNothing().when(this.candidateRepository).delete((Candidate) any());
        when(this.candidateRepository.findById((Integer) any())).thenReturn(ofResult);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.delete("/candidate/api/v1/id/{id}", 1);
        MockMvcBuilders.standaloneSetup(this.candidateController).build().perform(requestBuilder).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().contentType("application/json")).andExpect(MockMvcResultMatchers.content().string("{\"deleted\":true}"));
    }

    @Test
    public void testDeleteCandidate2() throws Exception {
        doNothing().when(this.candidateRepository).delete((Candidate) any());
        when(this.candidateRepository.findById((Integer) any())).thenReturn(Optional.<Candidate>empty());
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.delete("/candidate/api/v1/id/{id}", 1);
        ResultActions actualPerformResult = MockMvcBuilders.standaloneSetup(this.candidateController).build().perform(requestBuilder);
        actualPerformResult.andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void testGetAllCandidates() throws Exception {
        when(this.candidateRepository.findAll()).thenReturn(new ArrayList<Candidate>());
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/candidate/api/v1/all");
        MockMvcBuilders.standaloneSetup(this.candidateController).build().perform(requestBuilder).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().contentType("application/json")).andExpect(MockMvcResultMatchers.content().string("[]"));
    }

    @Test
    public void testGetAllCandidates2() throws Exception {
        when(this.candidateRepository.findAll()).thenReturn(new ArrayList<Candidate>());
        MockHttpServletRequestBuilder getResult = MockMvcRequestBuilders.get("/candidate/api/v1/all");
        getResult.contentType("Not all who wander are lost");
        MockMvcBuilders.standaloneSetup(this.candidateController).build().perform(getResult).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().contentType("application/json")).andExpect(MockMvcResultMatchers.content().string("[]"));
    }

    @Test
    public void testGetCandidateById() throws Exception {
        Address address = new Address();
        address.setId(1);
        address.setAddress("42 Main St");

        Stream stream = new Stream();
        stream.setId(1);
        stream.setStreamName("Stream Name");

        Recruiter recruiter = new Recruiter();
        recruiter.setLastName("Doe");
        recruiter.setEmail("jane.doe@example.org");
        recruiter.setId(1);
        recruiter.setPhoneNumber("4105551212");
        recruiter.setEncyptedPassword("iloveyou");
        recruiter.setCandidates(new ArrayList<Candidate>());
        recruiter.setFirstName("Jane");

        Candidate candidate = new Candidate();
        candidate.setLastName("Doe");
        candidate.setEmail("jane.doe@example.org");
        candidate.setAddress(address);
        candidate.setNotes("Notes");
        candidate.setStream(stream);
        candidate.setId(1);
        candidate.setPhoneNumber("4105551212");
        candidate.setAptitudeScore(10.0);
        candidate.setFirstName("Jane");
        candidate.setDateOfBirth("2020-03-01");
        candidate.setStatus("Status");
        candidate.setUniversity("University");
        candidate.setRecruiter(recruiter);
        candidate.setCv("Cv");
        candidate.setHistory(new ArrayList<Candidate>());
        Optional<Candidate> ofResult = Optional.<Candidate>of(candidate);
        when(this.candidateRepository.findById((Integer) any())).thenReturn(ofResult);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/candidate/api/v1/id/{id}", 1);
        MockMvcBuilders.standaloneSetup(this.candidateController).build().perform(requestBuilder).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().contentType("application/json")).andExpect(MockMvcResultMatchers.content().string("{\"id\":1,\"firstName\":\"Jane\",\"lastName\":\"Doe\",\"dateOfBirth\":\"2020-03-01\",\"address\":{\"id\":1,\"address\":\"42" + " Main St\"},\"email\":\"jane.doe@example.org\",\"phoneNumber\":\"4105551212\",\"university\":\"University\",\"cv\":" + "\"Cv\",\"aptitudeScore\":10.0,\"notes\":\"Notes\",\"status\":\"Status\",\"stream\":{\"id\":1,\"streamName\":\"Stream" + " Name\"},\"history\":[],\"streamName\":\"Stream Name\",\"recruiterId\":1}"));
    }

    @Test
    public void testGetCandidateById2() throws Exception {
        when(this.candidateRepository.findById((Integer) any())).thenReturn(Optional.<Candidate>empty());
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/candidate/api/v1/id/{id}", 1);
        ResultActions actualPerformResult = MockMvcBuilders.standaloneSetup(this.candidateController).build().perform(requestBuilder);
        actualPerformResult.andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void testUpdateCandidate() throws Exception {
        Address address = new Address();
        address.setId(1);
        address.setAddress("42 Main St");

        Stream stream = new Stream();
        stream.setId(1);
        stream.setStreamName("Stream Name");

        Recruiter recruiter = new Recruiter();
        recruiter.setLastName("Doe");
        recruiter.setEmail("jane.doe@example.org");
        recruiter.setId(1);
        recruiter.setPhoneNumber("4105551212");
        recruiter.setEncyptedPassword("iloveyou");
        recruiter.setCandidates(new ArrayList<Candidate>());
        recruiter.setFirstName("Jane");

        Candidate candidate = new Candidate();
        candidate.setLastName("Doe");
        candidate.setEmail("jane.doe@example.org");
        candidate.setAddress(address);
        candidate.setNotes("Notes");
        candidate.setStream(stream);
        candidate.setId(1);
        candidate.setPhoneNumber("4105551212");
        candidate.setAptitudeScore(10.0);
        candidate.setFirstName("Jane");
        candidate.setDateOfBirth("2020-03-01");
        candidate.setStatus("Status");
        candidate.setUniversity("University");
        candidate.setRecruiter(recruiter);
        candidate.setCv("Cv");
        candidate.setHistory(new ArrayList<Candidate>());
        Optional<Candidate> ofResult = Optional.<Candidate>of(candidate);

        Address address1 = new Address();
        address1.setId(1);
        address1.setAddress("42 Main St");

        Stream stream1 = new Stream();
        stream1.setId(1);
        stream1.setStreamName("Stream Name");

        Recruiter recruiter1 = new Recruiter();
        recruiter1.setLastName("Doe");
        recruiter1.setEmail("jane.doe@example.org");
        recruiter1.setId(1);
        recruiter1.setPhoneNumber("4105551212");
        recruiter1.setEncyptedPassword("iloveyou");
        recruiter1.setCandidates(new ArrayList<Candidate>());
        recruiter1.setFirstName("Jane");

        Candidate candidate1 = new Candidate();
        candidate1.setLastName("Doe");
        candidate1.setEmail("jane.doe@example.org");
        candidate1.setAddress(address1);
        candidate1.setNotes("Notes");
        candidate1.setStream(stream1);
        candidate1.setId(1);
        candidate1.setPhoneNumber("4105551212");
        candidate1.setAptitudeScore(10.0);
        candidate1.setFirstName("Jane");
        candidate1.setDateOfBirth("2020-03-01");
        candidate1.setStatus("Status");
        candidate1.setUniversity("University");
        candidate1.setRecruiter(recruiter1);
        candidate1.setCv("Cv");
        candidate1.setHistory(new ArrayList<Candidate>());
        when(this.candidateRepository.save((Candidate) any())).thenReturn(candidate1);
        when(this.candidateRepository.findById((Integer) any())).thenReturn(ofResult);

        Address address2 = new Address();
        address2.setId(1);
        address2.setAddress("42 Main St");

        Stream stream2 = new Stream();
        stream2.setId(1);
        stream2.setStreamName("Stream Name");

        Recruiter recruiter2 = new Recruiter();
        recruiter2.setLastName("Doe");
        recruiter2.setEmail("jane.doe@example.org");
        recruiter2.setId(1);
        recruiter2.setPhoneNumber("4105551212");
        recruiter2.setEncyptedPassword("iloveyou");
        recruiter2.setCandidates(new ArrayList<Candidate>());
        recruiter2.setFirstName("Jane");

        Candidate candidate2 = new Candidate();
        candidate2.setLastName("Doe");
        candidate2.setEmail("jane.doe@example.org");
        candidate2.setAddress(address2);
        candidate2.setNotes("Notes");
        candidate2.setStream(stream2);
        candidate2.setId(1);
        candidate2.setPhoneNumber("4105551212");
        candidate2.setAptitudeScore(10.0);
        candidate2.setFirstName("Jane");
        candidate2.setDateOfBirth("2020-03-01");
        candidate2.setStatus("Status");
        candidate2.setUniversity("University");
        candidate2.setRecruiter(recruiter2);
        candidate2.setCv("Cv");
        candidate2.setHistory(new ArrayList<Candidate>());
        String content = (new ObjectMapper()).writeValueAsString(candidate2);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.put("/candidate/api/v1/id/{id}", 1).contentType(MediaType.APPLICATION_JSON).content(content);
        MockMvcBuilders.standaloneSetup(this.candidateController).build().perform(requestBuilder).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().contentType("application/json")).andExpect(MockMvcResultMatchers.content().string("{\"id\":1,\"firstName\":\"Jane\",\"lastName\":\"Doe\",\"dateOfBirth\":\"2020-03-01\",\"address\":{\"id\":1,\"address\":\"42" + " Main St\"},\"email\":\"jane.doe@example.org\",\"phoneNumber\":\"4105551212\",\"university\":\"University\",\"cv\":" + "\"Cv\",\"aptitudeScore\":10.0,\"notes\":\"Notes\",\"status\":\"Status\",\"stream\":{\"id\":1,\"streamName\":\"Stream" + " Name\"},\"history\":[],\"streamName\":\"Stream Name\",\"recruiterId\":1}"));
    }
}