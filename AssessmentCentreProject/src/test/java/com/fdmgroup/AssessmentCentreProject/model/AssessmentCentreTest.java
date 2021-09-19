package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

public class AssessmentCentreTest {
    @Test
    public void testConstructor() {
        AssessmentCentre actualAssessmentCentre = new AssessmentCentre();
        ArrayList<Candidate> candidateList = new ArrayList<Candidate>();
        actualAssessmentCentre.setCandidates(candidateList);
        AssessmentCentre assessmentCentre = new AssessmentCentre();
        ACCoordinator acCoordinator = new ACCoordinator();
        assessmentCentre.setCoordinator(acCoordinator);
        LocalDateTime ofResult = LocalDateTime.of(1, 1, 1, 1, 1);
        assessmentCentre.setStart(ofResult);
        assessmentCentre.setId(1);
        ArrayList<Interviewer> interviewerList = new ArrayList<Interviewer>();
        assessmentCentre.setInterviewers(interviewerList);
        LocalDateTime ofResult1 = LocalDateTime.of(1, 1, 1, 1, 1);
        assessmentCentre.setEnd(ofResult1);
        ArrayList<Candidate> candidateList1 = new ArrayList<Candidate>();
        assessmentCentre.setCandidates(candidateList1);
        ACCoordinator acCoordinator1 = new ACCoordinator();
        acCoordinator1.setLastName("Doe");
        acCoordinator1.setEmail("jane.doe@example.org");
        acCoordinator1.setId(1);
        ArrayList<Candidate> candidateList2 = new ArrayList<Candidate>();
        acCoordinator1.assignCandidates(candidateList2);
        acCoordinator1.setPhoneNumber("4105551212");
        acCoordinator1.setEncyptedPassword("iloveyou");
        ArrayList<Interviewer> interviewerList1 = new ArrayList<Interviewer>();
        acCoordinator1.assignInterviewers(interviewerList1);
        ArrayList<AssessmentCentre> assessmentCentreList = new ArrayList<AssessmentCentre>();
        acCoordinator1.setAssessmentCentres(assessmentCentreList);
        acCoordinator1.setFirstName("Jane");
        acCoordinator1.setNewAC(assessmentCentre);
        AssessmentCentre assessmentCentre1 = new AssessmentCentre();
        assessmentCentre1.setCoordinator(acCoordinator1);
        LocalDateTime ofResult2 = LocalDateTime.of(1, 1, 1, 1, 1);
        assessmentCentre1.setStart(ofResult2);
        assessmentCentre1.setId(1);
        ArrayList<Interviewer> interviewerList2 = new ArrayList<Interviewer>();
        assessmentCentre1.setInterviewers(interviewerList2);
        LocalDateTime ofResult3 = LocalDateTime.of(1, 1, 1, 1, 1);
        assessmentCentre1.setEnd(ofResult3);
        ArrayList<Candidate> candidateList3 = new ArrayList<Candidate>();
        assessmentCentre1.setCandidates(candidateList3);
        ACCoordinator acCoordinator2 = new ACCoordinator();
        acCoordinator2.setLastName("Doe");
        acCoordinator2.setEmail("jane.doe@example.org");
        acCoordinator2.setId(1);
        ArrayList<Candidate> candidateList4 = new ArrayList<Candidate>();
        acCoordinator2.assignCandidates(candidateList4);
        acCoordinator2.setPhoneNumber("4105551212");
        acCoordinator2.setEncyptedPassword("iloveyou");
        ArrayList<Interviewer> interviewerList3 = new ArrayList<Interviewer>();
        acCoordinator2.assignInterviewers(interviewerList3);
        ArrayList<AssessmentCentre> assessmentCentreList1 = new ArrayList<AssessmentCentre>();
        acCoordinator2.setAssessmentCentres(assessmentCentreList1);
        acCoordinator2.setFirstName("Jane");
        acCoordinator2.setNewAC(assessmentCentre1);
        actualAssessmentCentre.setCoordinator(acCoordinator2);
        LocalDateTime ofResult4 = LocalDateTime.of(1, 1, 1, 1, 1);
        actualAssessmentCentre.setEnd(ofResult4);
        actualAssessmentCentre.setId(1);
        ArrayList<Interviewer> interviewerList4 = new ArrayList<Interviewer>();
        actualAssessmentCentre.setInterviewers(interviewerList4);
        LocalDateTime ofResult5 = LocalDateTime.of(1, 1, 1, 1, 1);
        actualAssessmentCentre.setStart(ofResult5);
        List<Candidate> candidates = actualAssessmentCentre.getCandidates();
        assertSame(candidateList, candidates);
        assertEquals(assessmentCentreList1, candidates);
        assertEquals(candidateList4, candidates);
        assertEquals(candidateList2, candidates);
        assertEquals(assessmentCentreList, candidates);
        assertEquals(candidateList3, candidates);
        assertEquals(interviewerList4, candidates);
        assertEquals(interviewerList1, candidates);
        assertEquals(interviewerList2, candidates);
        assertEquals(interviewerList3, candidates);
        assertEquals(candidateList1, candidates);
        assertEquals(interviewerList, candidates);
        ACCoordinator coordinator = actualAssessmentCentre.getCoordinator();
        AssessmentCentre newAC = coordinator.getNewAC();
        List<Candidate> candidates1 = newAC.getCandidates();
        assertSame(candidateList3, candidates1);
        assertEquals(candidates, candidates1);
        List<AssessmentCentre> assessmentCentres = coordinator.getAssessmentCentres();
        assertEquals(assessmentCentres, candidates1);
        assertEquals(candidateList4, candidates1);
        assertEquals(candidateList2, candidates1);
        assertEquals(assessmentCentreList, candidates1);
        List<Interviewer> interviewers = actualAssessmentCentre.getInterviewers();
        assertEquals(interviewers, candidates1);
        assertEquals(interviewerList1, candidates1);
        assertEquals(interviewerList2, candidates1);
        assertEquals(interviewerList3, candidates1);
        assertEquals(candidateList1, candidates1);
        assertEquals(interviewerList, candidates1);
        ACCoordinator coordinator1 = newAC.getCoordinator();
        AssessmentCentre newAC1 = coordinator1.getNewAC();
        List<Candidate> candidates2 = newAC1.getCandidates();
        assertSame(candidateList1, candidates2);
        assertEquals(candidates, candidates2);
        assertEquals(assessmentCentres, candidates2);
        assertEquals(candidateList4, candidates2);
        assertEquals(candidateList2, candidates2);
        List<AssessmentCentre> assessmentCentres1 = coordinator1.getAssessmentCentres();
        assertEquals(assessmentCentres1, candidates2);
        assertEquals(candidates1, candidates2);
        assertEquals(interviewers, candidates2);
        assertEquals(interviewerList1, candidates2);
        List<Interviewer> interviewers1 = newAC.getInterviewers();
        assertEquals(interviewers1, candidates2);
        assertEquals(interviewerList3, candidates2);
        assertEquals(interviewerList, candidates2);
        assertSame(acCoordinator2, coordinator);
        assertSame(acCoordinator1, coordinator1);
        assertSame(acCoordinator, newAC1.getCoordinator());
        assertSame(ofResult4, actualAssessmentCentre.getEnd());
        assertSame(ofResult3, newAC.getEnd());
        assertSame(ofResult1, newAC1.getEnd());
        assertEquals(1, actualAssessmentCentre.getId());
        assertEquals(1, newAC.getId());
        assertEquals(1, newAC1.getId());
        assertSame(interviewerList4, interviewers);
        assertEquals(candidates, interviewers);
        assertEquals(assessmentCentreList1, interviewers);
        assertEquals(candidateList4, interviewers);
        assertEquals(candidateList2, interviewers);
        assertEquals(assessmentCentreList, interviewers);
        assertEquals(candidateList3, interviewers);
        assertEquals(interviewerList1, interviewers);
        assertEquals(interviewerList2, interviewers);
        assertEquals(interviewerList3, interviewers);
        assertEquals(candidateList1, interviewers);
        assertEquals(interviewerList, interviewers);
        assertSame(interviewerList2, interviewers1);
        assertEquals(candidates, interviewers1);
        assertEquals(assessmentCentres, interviewers1);
        assertEquals(candidateList4, interviewers1);
        assertEquals(candidateList2, interviewers1);
        assertEquals(assessmentCentreList, interviewers1);
        assertEquals(candidates1, interviewers1);
        assertEquals(interviewers, interviewers1);
        assertEquals(interviewerList1, interviewers1);
        assertEquals(interviewerList3, interviewers1);
        assertEquals(candidateList1, interviewers1);
        assertEquals(interviewerList, interviewers1);
        List<Interviewer> interviewers2 = newAC1.getInterviewers();
        assertSame(interviewerList, interviewers2);
        assertEquals(candidates, interviewers2);
        assertEquals(assessmentCentres, interviewers2);
        assertEquals(candidateList4, interviewers2);
        assertEquals(candidateList2, interviewers2);
        assertEquals(assessmentCentres1, interviewers2);
        assertEquals(candidates1, interviewers2);
        assertEquals(interviewers, interviewers2);
        assertEquals(interviewerList1, interviewers2);
        assertEquals(interviewers1, interviewers2);
        assertEquals(interviewerList3, interviewers2);
        assertEquals(candidates2, interviewers2);
        assertSame(ofResult5, actualAssessmentCentre.getStart());
        assertSame(ofResult2, newAC.getStart());
        assertSame(ofResult, newAC1.getStart());
        assertEquals("AssessmentCentre [id=1, start=0001-01-01T01:01, end=0001-01-01T01:01, coordinator=ACCoordinator [id=1," + " firstName=Jane, lastName=Doe]]", actualAssessmentCentre.toString());
        assertEquals("AssessmentCentre [id=1, start=0001-01-01T01:01, end=0001-01-01T01:01, coordinator=ACCoordinator [id=1," + " firstName=Jane, lastName=Doe]]", newAC.toString());
        assertEquals("AssessmentCentre [id=1, start=0001-01-01T01:01, end=0001-01-01T01:01, coordinator=ACCoordinator [id=0," + " firstName=null, lastName=null]]", newAC1.toString());
    }

    @Test
    public void testConstructor2() {
        ArrayList<Candidate> candidateList = new ArrayList<Candidate>();
        ACCoordinator coordinator = new ACCoordinator();
        ArrayList<Interviewer> interviewerList = new ArrayList<Interviewer>();
        AssessmentCentre actualAssessmentCentre = new AssessmentCentre(candidateList, coordinator, interviewerList);
        ArrayList<Candidate> candidateList1 = new ArrayList<Candidate>();
        actualAssessmentCentre.setCandidates(candidateList1);
        AssessmentCentre assessmentCentre = new AssessmentCentre();
        ACCoordinator acCoordinator = new ACCoordinator();
        assessmentCentre.setCoordinator(acCoordinator);
        LocalDateTime ofResult = LocalDateTime.of(1, 1, 1, 1, 1);
        assessmentCentre.setStart(ofResult);
        assessmentCentre.setId(1);
        ArrayList<Interviewer> interviewerList1 = new ArrayList<Interviewer>();
        assessmentCentre.setInterviewers(interviewerList1);
        LocalDateTime ofResult1 = LocalDateTime.of(1, 1, 1, 1, 1);
        assessmentCentre.setEnd(ofResult1);
        ArrayList<Candidate> candidateList2 = new ArrayList<Candidate>();
        assessmentCentre.setCandidates(candidateList2);
        ACCoordinator acCoordinator1 = new ACCoordinator();
        acCoordinator1.setLastName("Doe");
        acCoordinator1.setEmail("jane.doe@example.org");
        acCoordinator1.setId(1);
        ArrayList<Candidate> candidateList3 = new ArrayList<Candidate>();
        acCoordinator1.assignCandidates(candidateList3);
        acCoordinator1.setPhoneNumber("4105551212");
        acCoordinator1.setEncyptedPassword("iloveyou");
        ArrayList<Interviewer> interviewerList2 = new ArrayList<Interviewer>();
        acCoordinator1.assignInterviewers(interviewerList2);
        ArrayList<AssessmentCentre> assessmentCentreList = new ArrayList<AssessmentCentre>();
        acCoordinator1.setAssessmentCentres(assessmentCentreList);
        acCoordinator1.setFirstName("Jane");
        acCoordinator1.setNewAC(assessmentCentre);
        AssessmentCentre assessmentCentre1 = new AssessmentCentre();
        assessmentCentre1.setCoordinator(acCoordinator1);
        LocalDateTime ofResult2 = LocalDateTime.of(1, 1, 1, 1, 1);
        assessmentCentre1.setStart(ofResult2);
        assessmentCentre1.setId(1);
        ArrayList<Interviewer> interviewerList3 = new ArrayList<Interviewer>();
        assessmentCentre1.setInterviewers(interviewerList3);
        LocalDateTime ofResult3 = LocalDateTime.of(1, 1, 1, 1, 1);
        assessmentCentre1.setEnd(ofResult3);
        ArrayList<Candidate> candidateList4 = new ArrayList<Candidate>();
        assessmentCentre1.setCandidates(candidateList4);
        ACCoordinator acCoordinator2 = new ACCoordinator();
        acCoordinator2.setLastName("Doe");
        acCoordinator2.setEmail("jane.doe@example.org");
        acCoordinator2.setId(1);
        ArrayList<Candidate> candidateList5 = new ArrayList<Candidate>();
        acCoordinator2.assignCandidates(candidateList5);
        acCoordinator2.setPhoneNumber("4105551212");
        acCoordinator2.setEncyptedPassword("iloveyou");
        ArrayList<Interviewer> interviewerList4 = new ArrayList<Interviewer>();
        acCoordinator2.assignInterviewers(interviewerList4);
        ArrayList<AssessmentCentre> assessmentCentreList1 = new ArrayList<AssessmentCentre>();
        acCoordinator2.setAssessmentCentres(assessmentCentreList1);
        acCoordinator2.setFirstName("Jane");
        acCoordinator2.setNewAC(assessmentCentre1);
        actualAssessmentCentre.setCoordinator(acCoordinator2);
        LocalDateTime ofResult4 = LocalDateTime.of(1, 1, 1, 1, 1);
        actualAssessmentCentre.setEnd(ofResult4);
        actualAssessmentCentre.setId(1);
        ArrayList<Interviewer> interviewerList5 = new ArrayList<Interviewer>();
        actualAssessmentCentre.setInterviewers(interviewerList5);
        LocalDateTime ofResult5 = LocalDateTime.of(1, 1, 1, 1, 1);
        actualAssessmentCentre.setStart(ofResult5);
        List<Candidate> candidates = actualAssessmentCentre.getCandidates();
        assertSame(candidateList1, candidates);
        assertEquals(candidateList3, candidates);
        assertEquals(interviewerList3, candidates);
        assertEquals(assessmentCentreList1, candidates);
        assertEquals(interviewerList2, candidates);
        assertEquals(candidateList2, candidates);
        assertEquals(interviewerList1, candidates);
        assertEquals(interviewerList4, candidates);
        assertEquals(candidateList4, candidates);
        assertEquals(candidateList5, candidates);
        assertEquals(candidateList, candidates);
        assertEquals(assessmentCentreList, candidates);
        assertEquals(interviewerList5, candidates);
        assertEquals(interviewerList, candidates);
        ACCoordinator coordinator1 = actualAssessmentCentre.getCoordinator();
        AssessmentCentre newAC = coordinator1.getNewAC();
        List<Candidate> candidates1 = newAC.getCandidates();
        assertSame(candidateList4, candidates1);
        assertEquals(candidateList3, candidates1);
        assertEquals(interviewerList3, candidates1);
        List<AssessmentCentre> assessmentCentres = coordinator1.getAssessmentCentres();
        assertEquals(assessmentCentres, candidates1);
        assertEquals(interviewerList2, candidates1);
        assertEquals(candidates, candidates1);
        assertEquals(candidateList2, candidates1);
        assertEquals(interviewerList1, candidates1);
        assertEquals(interviewerList4, candidates1);
        assertEquals(candidateList5, candidates1);
        assertEquals(candidateList, candidates1);
        assertEquals(assessmentCentreList, candidates1);
        List<Interviewer> interviewers = actualAssessmentCentre.getInterviewers();
        assertEquals(interviewers, candidates1);
        assertEquals(interviewerList, candidates1);
        ACCoordinator coordinator2 = newAC.getCoordinator();
        AssessmentCentre newAC1 = coordinator2.getNewAC();
        List<Candidate> candidates2 = newAC1.getCandidates();
        assertSame(candidateList2, candidates2);
        assertEquals(candidateList3, candidates2);
        List<Interviewer> interviewers1 = newAC.getInterviewers();
        assertEquals(interviewers1, candidates2);
        assertEquals(assessmentCentres, candidates2);
        assertEquals(interviewerList2, candidates2);
        assertEquals(candidates, candidates2);
        assertEquals(interviewerList1, candidates2);
        assertEquals(interviewerList4, candidates2);
        assertEquals(candidates1, candidates2);
        assertEquals(candidateList5, candidates2);
        assertEquals(candidateList, candidates2);
        List<AssessmentCentre> assessmentCentres1 = coordinator2.getAssessmentCentres();
        assertEquals(assessmentCentres1, candidates2);
        assertEquals(interviewers, candidates2);
        assertEquals(interviewerList, candidates2);
        assertSame(acCoordinator2, coordinator1);
        assertSame(acCoordinator1, coordinator2);
        assertSame(acCoordinator, newAC1.getCoordinator());
        assertSame(ofResult4, actualAssessmentCentre.getEnd());
        assertSame(ofResult3, newAC.getEnd());
        assertSame(ofResult1, newAC1.getEnd());
        assertEquals(1, actualAssessmentCentre.getId());
        assertEquals(1, newAC.getId());
        assertEquals(1, newAC1.getId());
        assertSame(interviewerList5, interviewers);
        assertEquals(candidateList3, interviewers);
        assertEquals(interviewerList3, interviewers);
        assertEquals(assessmentCentreList1, interviewers);
        assertEquals(interviewerList2, interviewers);
        assertEquals(candidates, interviewers);
        assertEquals(candidateList2, interviewers);
        assertEquals(interviewerList1, interviewers);
        assertEquals(interviewerList4, interviewers);
        assertEquals(candidateList4, interviewers);
        assertEquals(candidateList5, interviewers);
        assertEquals(candidateList, interviewers);
        assertEquals(assessmentCentreList, interviewers);
        assertEquals(interviewerList, interviewers);
        assertSame(interviewerList3, interviewers1);
        assertEquals(candidateList3, interviewers1);
        assertEquals(assessmentCentres, interviewers1);
        assertEquals(interviewerList2, interviewers1);
        assertEquals(candidates, interviewers1);
        assertEquals(candidateList2, interviewers1);
        assertEquals(interviewerList1, interviewers1);
        assertEquals(interviewerList4, interviewers1);
        assertEquals(candidates1, interviewers1);
        assertEquals(candidateList5, interviewers1);
        assertEquals(candidateList, interviewers1);
        assertEquals(assessmentCentreList, interviewers1);
        assertEquals(interviewers, interviewers1);
        assertEquals(interviewerList, interviewers1);
        List<Interviewer> interviewers2 = newAC1.getInterviewers();
        assertSame(interviewerList1, interviewers2);
        assertEquals(candidateList3, interviewers2);
        assertEquals(interviewers1, interviewers2);
        assertEquals(assessmentCentres, interviewers2);
        assertEquals(interviewerList2, interviewers2);
        assertEquals(candidates, interviewers2);
        assertEquals(candidates2, interviewers2);
        assertEquals(interviewerList4, interviewers2);
        assertEquals(candidates1, interviewers2);
        assertEquals(candidateList5, interviewers2);
        assertEquals(candidateList, interviewers2);
        assertEquals(assessmentCentres1, interviewers2);
        assertEquals(interviewers, interviewers2);
        assertEquals(interviewerList, interviewers2);
        assertSame(ofResult5, actualAssessmentCentre.getStart());
        assertSame(ofResult2, newAC.getStart());
        assertSame(ofResult, newAC1.getStart());
        assertEquals("AssessmentCentre [id=1, start=0001-01-01T01:01, end=0001-01-01T01:01, coordinator=ACCoordinator [id=1," + " firstName=Jane, lastName=Doe]]", actualAssessmentCentre.toString());
        assertEquals("AssessmentCentre [id=1, start=0001-01-01T01:01, end=0001-01-01T01:01, coordinator=ACCoordinator [id=1," + " firstName=Jane, lastName=Doe]]", newAC.toString());
        assertEquals("AssessmentCentre [id=1, start=0001-01-01T01:01, end=0001-01-01T01:01, coordinator=ACCoordinator [id=0," + " firstName=null, lastName=null]]", newAC1.toString());
    }
}