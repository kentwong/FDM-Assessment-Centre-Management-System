package com.fdmgroup.AssessmentCentreProject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.ACCoordinator;
import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentre;

@Repository
public interface AssessmentCentreRepository extends JpaRepository<AssessmentCentre, Integer>{

	List<AssessmentCentre> findByCoordinator(ACCoordinator coordinator);
	
}
