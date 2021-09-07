package com.fdmgroup.AssessmentCentreProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.Recruiter;

@Repository
public interface RecruiterRepository extends JpaRepository<Recruiter, Integer>{

}
