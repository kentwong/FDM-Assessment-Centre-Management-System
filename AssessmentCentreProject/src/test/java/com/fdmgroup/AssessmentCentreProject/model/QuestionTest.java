package com.fdmgroup.AssessmentCentreProject.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.fdmgroup.AssessmentCentreProject.model.enums.QuestionType;
import org.junit.jupiter.api.Test;

public class QuestionTest {
    @Test
    public void testConstructor() {
        Question actualQuestion = new Question();
        actualQuestion.setId(1);
        actualQuestion.setQuestionBody("Not all who wander are lost");
        actualQuestion.setQuestionType(QuestionType.GENERAL);
        assertEquals(1, actualQuestion.getId());
        assertEquals("Not all who wander are lost", actualQuestion.getQuestionBody());
        assertEquals(QuestionType.GENERAL, actualQuestion.getQuestionType());
        assertEquals("Question [id=1, questionBody=Not all who wander are lost, questionType=GENERAL]", actualQuestion.toString());
    }

    @Test
    public void testConstructor2() {
        Question actualQuestion = new Question(1, "Not all who wander are lost", QuestionType.GENERAL);
        actualQuestion.setId(1);
        actualQuestion.setQuestionBody("Not all who wander are lost");
        actualQuestion.setQuestionType(QuestionType.GENERAL);
        assertEquals(1, actualQuestion.getId());
        assertEquals("Not all who wander are lost", actualQuestion.getQuestionBody());
        assertEquals(QuestionType.GENERAL, actualQuestion.getQuestionType());
        assertEquals("Question [id=1, questionBody=Not all who wander are lost, questionType=GENERAL]", actualQuestion.toString());
    }
}