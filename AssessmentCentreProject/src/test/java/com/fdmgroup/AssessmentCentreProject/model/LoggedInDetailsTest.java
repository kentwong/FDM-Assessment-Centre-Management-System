package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class LoggedInDetailsTest {
    @Test
    public void testConstructor() {
        LoggedInDetails actualLoggedInDetails = new LoggedInDetails(123, "Role", "Name");
        actualLoggedInDetails.setName("Name");
        actualLoggedInDetails.setRole("Role");
        actualLoggedInDetails.setStaffId(123);
        assertEquals("Name", actualLoggedInDetails.getName());
        assertEquals("Role", actualLoggedInDetails.getRole());
        assertEquals(123, actualLoggedInDetails.getStaffId());
    }
}