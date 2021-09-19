package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;

public class InterviewerTest {
    @Test
    public void testConstructor() {
        Interviewer actualInterviewer = new Interviewer();
        ArrayList<AssessmentCentreResponse> assessmentCentreResponseList = new ArrayList<AssessmentCentreResponse>();
        actualInterviewer.setResponses(assessmentCentreResponseList);
        assertSame(assessmentCentreResponseList, actualInterviewer.getResponses());
        assertEquals("Interviewer [responses=[]]", actualInterviewer.toString());
    }
}