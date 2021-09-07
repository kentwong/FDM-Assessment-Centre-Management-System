package com.fdmgroup.AssessmentCentreProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.Interviewer;

@Repository
public interface InterviewerRepository extends JpaRepository<Interviewer, Integer>{

}
