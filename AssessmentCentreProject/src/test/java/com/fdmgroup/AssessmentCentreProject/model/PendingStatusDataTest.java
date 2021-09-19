package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class PendingStatusDataTest {
    @Test
    public void testConstructor() {
        PendingStatusData actualPendingStatusData = new PendingStatusData(1, 1, 1, 1, 1, 1, 1, 1);
        actualPendingStatusData.setAc(1);
        actualPendingStatusData.setAptitudeTest(1);
        actualPendingStatusData.setCv(1);
        actualPendingStatusData.setNewApplications(1);
        actualPendingStatusData.setOffers(1);
        actualPendingStatusData.setPhoneScreening(1);
        actualPendingStatusData.setRejectedApplications(1);
        actualPendingStatusData.setVideoInterview(1);
        assertEquals(1, actualPendingStatusData.getAc());
        assertEquals(1, actualPendingStatusData.getAptitudeTest());
        assertEquals(1, actualPendingStatusData.getCv());
        assertEquals(1, actualPendingStatusData.getNewApplications());
        assertEquals(1, actualPendingStatusData.getOffers());
        assertEquals(1, actualPendingStatusData.getPhoneScreening());
        assertEquals(1, actualPendingStatusData.getRejectedApplications());
        assertEquals(1, actualPendingStatusData.getVideoInterview());
    }
}