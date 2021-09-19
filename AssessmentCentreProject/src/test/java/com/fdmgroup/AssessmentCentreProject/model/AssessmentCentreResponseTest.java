package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import com.fdmgroup.AssessmentCentreProject.model.enums.QuestionType;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;

public class AssessmentCentreResponseTest {
    @Test
    public void testConstructor() {
        AssessmentCentreResponse actualAssessmentCentreResponse = new AssessmentCentreResponse();
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
        actualAssessmentCentreResponse.setCandidate(candidate);
        actualAssessmentCentreResponse.setId(1);
        Interviewer interviewer = new Interviewer();
        interviewer.setLastName("Doe");
        interviewer.setEmail("jane.doe@example.org");
        interviewer.setResponses(new ArrayList<AssessmentCentreResponse>());
        interviewer.setId(1);
        interviewer.setPhoneNumber("4105551212");
        interviewer.setEncyptedPassword("iloveyou");
        interviewer.setFirstName("Jane");
        actualAssessmentCentreResponse.setInterviewer(interviewer);
        actualAssessmentCentreResponse.setNotes("Notes");
        actualAssessmentCentreResponse.setPoints(10.0);
        Question question = new Question();
        question.setQuestionBody("Not all who wander are lost");
        question.setId(1);
        question.setQuestionType(QuestionType.GENERAL);
        actualAssessmentCentreResponse.setQuestion(question);
        assertSame(candidate, actualAssessmentCentreResponse.getCandidate());
        assertEquals(1, actualAssessmentCentreResponse.getId());
        assertSame(interviewer, actualAssessmentCentreResponse.getInterviewer());
        assertEquals("Notes", actualAssessmentCentreResponse.getNotes());
        assertEquals(10.0, actualAssessmentCentreResponse.getPoints());
        assertSame(question, actualAssessmentCentreResponse.getQuestion());
    }

    @Test
    public void testConstructor2() {
        Candidate candidate = new Candidate();
        Interviewer interviewer = new Interviewer();
        AssessmentCentreResponse actualAssessmentCentreResponse = new AssessmentCentreResponse(candidate, interviewer, new Question(1, "Not all who wander are lost", QuestionType.GENERAL));
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
        Candidate candidate1 = new Candidate();
        candidate1.setLastName("Doe");
        candidate1.setEmail("jane.doe@example.org");
        candidate1.setAddress(address);
        candidate1.setNotes("Notes");
        candidate1.setStream(stream);
        candidate1.setId(1);
        candidate1.setPhoneNumber("4105551212");
        candidate1.setAptitudeScore(10.0);
        candidate1.setFirstName("Jane");
        candidate1.setDateOfBirth("2020-03-01");
        candidate1.setStatus("Status");
        candidate1.setUniversity("University");
        candidate1.setRecruiter(recruiter);
        candidate1.setCv("Cv");
        candidate1.setHistory(new ArrayList<Candidate>());
        actualAssessmentCentreResponse.setCandidate(candidate1);
        actualAssessmentCentreResponse.setId(1);
        Interviewer interviewer1 = new Interviewer();
        interviewer1.setLastName("Doe");
        interviewer1.setEmail("jane.doe@example.org");
        interviewer1.setResponses(new ArrayList<AssessmentCentreResponse>());
        interviewer1.setId(1);
        interviewer1.setPhoneNumber("4105551212");
        interviewer1.setEncyptedPassword("iloveyou");
        interviewer1.setFirstName("Jane");
        actualAssessmentCentreResponse.setInterviewer(interviewer1);
        actualAssessmentCentreResponse.setNotes("Notes");
        actualAssessmentCentreResponse.setPoints(10.0);
        Question question = new Question();
        question.setQuestionBody("Not all who wander are lost");
        question.setId(1);
        question.setQuestionType(QuestionType.GENERAL);
        actualAssessmentCentreResponse.setQuestion(question);
        assertSame(candidate1, actualAssessmentCentreResponse.getCandidate());
        assertEquals(1, actualAssessmentCentreResponse.getId());
        assertSame(interviewer1, actualAssessmentCentreResponse.getInterviewer());
        assertEquals("Notes", actualAssessmentCentreResponse.getNotes());
        assertEquals(10.0, actualAssessmentCentreResponse.getPoints());
        assertSame(question, actualAssessmentCentreResponse.getQuestion());
    }
}