package com.fdmgroup.AssessmentCentreProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentreResponse;


@Repository
public interface AssessmentCentreResponseRepository extends JpaRepository<AssessmentCentreResponse, Integer>{

}
