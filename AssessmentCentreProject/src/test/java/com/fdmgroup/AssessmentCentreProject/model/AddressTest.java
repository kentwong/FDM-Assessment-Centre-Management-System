package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class AddressTest {
    @Test
    public void testConstructor() {
        Address actualAddress = new Address();
        actualAddress.setAddress("42 Main St");
        actualAddress.setId(1);
        assertEquals("42 Main St", actualAddress.getAddress());
        assertEquals(1, actualAddress.getId());
        assertEquals("Address [id=1, address=42 Main St]", actualAddress.toString());
    }

    @Test
    public void testConstructor2() {
        Address actualAddress = new Address(1, "42 Main St");
        actualAddress.setAddress("42 Main St");
        actualAddress.setId(1);
        assertEquals("42 Main St", actualAddress.getAddress());
        assertEquals(1, actualAddress.getId());
        assertEquals("Address [id=1, address=42 Main St]", actualAddress.toString());
    }
}