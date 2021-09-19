package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;

public class ACDatesTemplateTest {
    @Test
    public void testConstructor() {
        ACDatesTemplate actualAcDatesTemplate = new ACDatesTemplate();
        LocalDateTime ofResult = LocalDateTime.of(1, 1, 1, 1, 1);
        actualAcDatesTemplate.setEnd(ofResult);
        actualAcDatesTemplate.setId(1);
        LocalDateTime ofResult1 = LocalDateTime.of(1, 1, 1, 1, 1);
        actualAcDatesTemplate.setStart(ofResult1);
        assertSame(ofResult, actualAcDatesTemplate.getEnd());
        assertEquals(1, actualAcDatesTemplate.getId());
        assertSame(ofResult1, actualAcDatesTemplate.getStart());
        assertEquals("ACDatesTemplate [id=1, start=0001-01-01T01:01, end=0001-01-01T01:01]", actualAcDatesTemplate.toString());
    }
}