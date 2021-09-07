package com.fdmgroup.AssessmentCentreProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.ACCoordinator;

@Repository
public interface ACCoordinatorRepository extends JpaRepository<ACCoordinator, Integer>{

}
