package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import com.fdmgroup.AssessmentCentreProject.model.enums.AptitudeType;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

public class CandidateTest {
    @Test
    public void testConstructor() {
        Candidate actualCandidate = new Candidate();
        Address address = new Address();
        address.setId(1);
        address.setAddress("42 Main St");
        actualCandidate.setAddress(address);
        actualCandidate.setAptitudeScore(10.0);
        actualCandidate.setCv("Cv");
        actualCandidate.setDateOfBirth("2020-03-01");
        actualCandidate.setEmail("jane.doe@example.org");
        actualCandidate.setFirstName("Jane");
        ArrayList<Candidate> candidateList = new ArrayList<Candidate>();
        actualCandidate.setHistory(candidateList);
        actualCandidate.setId(1);
        actualCandidate.setLastName("Doe");
        actualCandidate.setNotes("Notes");
        actualCandidate.setPhoneNumber("4105551212");
        Recruiter recruiter = new Recruiter();
        recruiter.setLastName("Doe");
        recruiter.setEmail("jane.doe@example.org");
        recruiter.setId(1);
        recruiter.setPhoneNumber("4105551212");
        recruiter.setEncyptedPassword("iloveyou");
        ArrayList<Candidate> candidateList1 = new ArrayList<Candidate>();
        recruiter.setCandidates(candidateList1);
        recruiter.setFirstName("Jane");
        actualCandidate.setRecruiter(recruiter);
        actualCandidate.setStatus("Status");
        Stream stream = new Stream();
        stream.setId(1);
        stream.setStreamName("Stream Name");
        actualCandidate.setStream(stream);
        actualCandidate.setUniversity("University");
        assertSame(address, actualCandidate.getAddress());
        assertEquals(10.0, actualCandidate.getAptitudeScore());
        assertEquals("Cv", actualCandidate.getCv());
        assertEquals("2020-03-01", actualCandidate.getDateOfBirth());
        assertEquals("jane.doe@example.org", actualCandidate.getEmail());
        assertEquals("Jane", actualCandidate.getFirstName());
        List<Candidate> history = actualCandidate.getHistory();
        assertSame(candidateList, history);
        assertEquals(candidateList1, history);
        assertEquals(1, actualCandidate.getId());
        assertEquals("Doe", actualCandidate.getLastName());
        assertEquals("Notes", actualCandidate.getNotes());
        assertEquals("4105551212", actualCandidate.getPhoneNumber());
        assertSame(recruiter, actualCandidate.getRecruiter());
        assertEquals("Status", actualCandidate.getStatus());
        assertSame(stream, actualCandidate.getStream());
        assertEquals("University", actualCandidate.getUniversity());
    }

    @Test
    public void testConstructor2() {
        Address address = new Address(1, "42 Main St");

        Recruiter recruiter = new Recruiter();
        Candidate actualCandidate = new Candidate(1, "Jane", "Doe", "2020-03-01", address, "jane.doe@example.org", "4105551212", "University", "Cv", 10.0, "Notes", recruiter, new Stream(1, "Stream Name", 1, AptitudeType.TECHNICAL), "Status");

        assertSame(address, actualCandidate.getAddress());
        assertEquals("University", actualCandidate.getUniversity());
        assertEquals(10.0, actualCandidate.getAptitudeScore());
        assertEquals("2020-03-01", actualCandidate.getDateOfBirth());
        assertEquals(1, actualCandidate.getId());
        assertEquals("Stream Name", actualCandidate.getStreamName());
        assertEquals("Status", actualCandidate.getStatus());
        assertEquals("Doe", actualCandidate.getLastName());
        assertEquals("jane.doe@example.org", actualCandidate.getEmail());
        assertEquals("Notes", actualCandidate.getNotes());
        assertEquals(0, actualCandidate.getRecruiterId());
        assertEquals("4105551212", actualCandidate.getPhoneNumber());
        assertEquals("Cv", actualCandidate.getCv());
        assertEquals("Jane", actualCandidate.getFirstName());
    }

    @Test
    public void testGetRecruiterId() {
        assertEquals(0, (new Candidate()).getRecruiterId());
    }

    @Test
    public void testGetRecruiterId2() {
        Address address = new Address(1, "42 Main St");

        Recruiter recruiter = new Recruiter();
        assertEquals(0, (new Candidate(1, "Jane", "Doe", "2020-03-01", address, "jane.doe@example.org", "4105551212", "University", "Cv", 10.0, "Notes", recruiter, new Stream(1, "Stream Name", 1, AptitudeType.TECHNICAL), "Status")).getRecruiterId());
    }

    @Test
    public void testGetStreamName() {
        assertEquals("", (new Candidate()).getStreamName());
    }

    @Test
    public void testGetStreamName2() {
        Address address = new Address(1, "42 Main St");

        Recruiter recruiter = new Recruiter();
        assertEquals("Stream Name", (new Candidate(1, "Jane", "Doe", "2020-03-01", address, "jane.doe@example.org", "4105551212", "University", "Cv", 10.0, "Notes", recruiter, new Stream(1, "Stream Name", 1, AptitudeType.TECHNICAL), "Status")).getStreamName());
    }
}