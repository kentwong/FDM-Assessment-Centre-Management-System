package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;

public class RecruiterTest {
    @Test
    public void testConstructor() {
        Recruiter actualRecruiter = new Recruiter();
        ArrayList<Candidate> candidateList = new ArrayList<Candidate>();
        actualRecruiter.setCandidates(candidateList);
        assertSame(candidateList, actualRecruiter.getCandidates());
        assertEquals("Recruiter [candidates=[]]", actualRecruiter.toString());
    }
}