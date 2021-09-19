package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class ACOverviewDataTest {
    @Test
    public void testConstructor() {
        ACOverviewData actualAcOverviewData = new ACOverviewData(1, 1, 1);
        actualAcOverviewData.setCompletedAcs(1);
        actualAcOverviewData.setUnasignedApplicants(1);
        actualAcOverviewData.setUpcomingAcs(1);
        assertEquals(1, actualAcOverviewData.getCompletedAcs());
        assertEquals(1, actualAcOverviewData.getUnasignedApplicants());
        assertEquals(1, actualAcOverviewData.getUpcomingAcs());
    }
}