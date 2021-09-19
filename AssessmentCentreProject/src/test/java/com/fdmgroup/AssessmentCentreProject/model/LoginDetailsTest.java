package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;

public class LoginDetailsTest {
    @Test
    public void testConstructor() {
        LoginDetails actualLoginDetails = new LoginDetails();
        actualLoginDetails.setEmailAddress("42 Main St");
        assertEquals("42 Main St", actualLoginDetails.getEmailAddress());
        assertNull(actualLoginDetails.getPassword());
    }

    @Test
    public void testSetPassword() {
        LoginDetails loginDetails = new LoginDetails();
        loginDetails.setPassword("iloveyou");
        assertEquals("f25a2fc72690b780b2a14e140ef6a9e0", loginDetails.getPassword());
    }

    @Test
    public void testEncryptPassword() {
        assertEquals("f25a2fc72690b780b2a14e140ef6a9e0", (new LoginDetails()).encryptPassword("iloveyou"));
    }
}