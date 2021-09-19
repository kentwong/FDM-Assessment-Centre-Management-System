package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import com.fdmgroup.AssessmentCentreProject.model.enums.QuestionType;

import java.time.LocalDate;
import java.util.ArrayList;

import org.junit.jupiter.api.Test;

public class CandidateACResultTest {
    @Test
    public void testConstructor() {
        CandidateACResult actualCandidateACResult = new CandidateACResult();
        actualCandidateACResult.setBehavioural(10.0);
        actualCandidateACResult.setBehaviouralTotal(10.0);
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
        actualCandidateACResult.setCandidate(candidate);
        actualCandidateACResult.setCurveball(10.0);
        actualCandidateACResult.setCurveballTotal(10.0);
        LocalDate ofEpochDayResult = LocalDate.ofEpochDay(1L);
        actualCandidateACResult.setDate(ofEpochDayResult);
        actualCandidateACResult.setGeneral(10.0);
        actualCandidateACResult.setGeneralTotal(10.0);
        actualCandidateACResult.setGrade("Grade");
        Interviewer interviewer = new Interviewer();
        interviewer.setLastName("Doe");
        interviewer.setEmail("jane.doe@example.org");
        interviewer.setResponses(new ArrayList<AssessmentCentreResponse>());
        interviewer.setId(1);
        interviewer.setPhoneNumber("4105551212");
        interviewer.setEncyptedPassword("iloveyou");
        interviewer.setFirstName("Jane");
        actualCandidateACResult.setInterviewer(interviewer);
        actualCandidateACResult.setNotes("Notes");
        actualCandidateACResult.setOverall(10.0);
        Question question = new Question();
        question.setQuestionBody("Not all who wander are lost");
        question.setId(1);
        question.setQuestionType(QuestionType.GENERAL);
        actualCandidateACResult.setQuestion(question);
        actualCandidateACResult.setTechnical(10.0);
        actualCandidateACResult.setTechnicalTotal(10.0);
        assertEquals(10.0, actualCandidateACResult.getBehavioural());
        assertEquals(10.0, actualCandidateACResult.getBehaviouralTotal());
        assertSame(candidate, actualCandidateACResult.getCandidate());
        assertEquals(10.0, actualCandidateACResult.getCurveball());
        assertEquals(10.0, actualCandidateACResult.getCurveballTotal());
        assertSame(ofEpochDayResult, actualCandidateACResult.getDate());
        assertEquals(10.0, actualCandidateACResult.getGeneral());
        assertEquals(10.0, actualCandidateACResult.getGeneralTotal());
        assertEquals("Grade", actualCandidateACResult.getGrade());
        assertSame(interviewer, actualCandidateACResult.getInterviewer());
        assertEquals("Notes", actualCandidateACResult.getNotes());
        assertEquals(10.0, actualCandidateACResult.getOverall());
        assertSame(question, actualCandidateACResult.getQuestion());
        assertEquals(10.0, actualCandidateACResult.getTechnical());
        assertEquals(10.0, actualCandidateACResult.getTechnicalTotal());
    }
}