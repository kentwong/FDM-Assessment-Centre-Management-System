package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.fdmgroup.AssessmentCentreProject.model.enums.AptitudeType;
import org.junit.jupiter.api.Test;

public class StreamTest {
    @Test
    public void testConstructor() {
        Stream actualStream = new Stream();
        actualStream.setId(1);
        actualStream.setStreamName("Stream Name");
        assertEquals(1, actualStream.getId());
        assertEquals("Stream Name", actualStream.getStreamName());
        assertEquals("Stream [id=1, streamName=Stream Name, duration=0, aptitudeTestType=null]", actualStream.toString());
    }

    @Test
    public void testConstructor2() {
        Stream actualStream = new Stream(1, "Stream Name", 1, AptitudeType.TECHNICAL);
        actualStream.setId(1);
        actualStream.setStreamName("Stream Name");
        assertEquals(1, actualStream.getId());
        assertEquals("Stream Name", actualStream.getStreamName());
        assertEquals("Stream [id=1, streamName=Stream Name, duration=1, aptitudeTestType=TECHNICAL]", actualStream.toString());
    }
}