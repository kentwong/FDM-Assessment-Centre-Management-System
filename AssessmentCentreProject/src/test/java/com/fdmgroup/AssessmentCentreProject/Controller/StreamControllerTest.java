package com.fdmgroup.AssessmentCentreProject.Controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import com.fdmgroup.AssessmentCentreProject.model.Stream;
import com.fdmgroup.AssessmentCentreProject.repository.StreamRepository;

import java.util.ArrayList;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@ContextConfiguration(classes = {StreamController.class})
@ExtendWith(SpringExtension.class)
public class StreamControllerTest {
    @Autowired
    private StreamController streamController;

    @MockBean
    private StreamRepository streamRepository;

    @Test
    public void testConstructor() {
        ResponseEntity<List<Stream>> allCandidates = (new StreamController(mock(StreamRepository.class))).getAllCandidates();
        assertTrue(allCandidates.getBody().isEmpty());
        assertEquals("<200 OK OK,[],[]>", allCandidates.toString());
        assertTrue(allCandidates.hasBody());
        assertEquals(200, allCandidates.getStatusCodeValue());
        assertEquals(HttpStatus.OK, allCandidates.getStatusCode());
        assertTrue(allCandidates.getHeaders().isEmpty());
    }

    @Test
    public void testGetAllCandidates() throws Exception {
        when(this.streamRepository.findAll()).thenReturn(new ArrayList<Stream>());
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/stream/api/v1/all");
        MockMvcBuilders.standaloneSetup(this.streamController).build().perform(requestBuilder).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().contentType("application/json")).andExpect(MockMvcResultMatchers.content().string("[]"));
    }
}