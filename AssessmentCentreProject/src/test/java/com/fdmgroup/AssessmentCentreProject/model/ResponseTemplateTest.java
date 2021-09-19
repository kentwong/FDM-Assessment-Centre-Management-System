package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class ResponseTemplateTest {
    @Test
    public void testConstructor() {
        ResponseTemplate actualResponseTemplate = new ResponseTemplate();
        actualResponseTemplate.setCandidate("2020-03-01");
        actualResponseTemplate.setInterviewType("Interview Type");
        actualResponseTemplate.setInterviewer("Interviewer");
        assertEquals("2020-03-01", actualResponseTemplate.getCandidate());
        assertEquals("Interview Type", actualResponseTemplate.getInterviewType());
        assertEquals("Interviewer", actualResponseTemplate.getInterviewer());
        assertEquals("ResponseTemplate [candidate=2020-03-01, interviewType=Interview Type, interviewer=Interviewer]", actualResponseTemplate.toString());
    }
}