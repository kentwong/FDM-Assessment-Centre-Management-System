package com.fdmgroup.AssessmentCentreProject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.ACCoordinator;
import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentre;

@Repository
public interface AssessmentCentreRepository extends JpaRepository<AssessmentCentre, Integer>{

	List<AssessmentCentre> findByCoordinator(ACCoordinator coordinator);
	
	@Query(value="SELECT * FROM assessment_centre ac WHERE ac.start > CURRENT_TIMESTAMP()", nativeQuery=true)
	List<AssessmentCentre> upcomingACS();
	
	@Query(value="SELECT * FROM assessment_centre ac WHERE ac.end < CURRENT_TIMESTAMP()", nativeQuery=true)
	List<AssessmentCentre> completedACS();
	
	@Query(value="SELECT ac.id, ac.start, max(ac.end) as end, ac.fk_coordinator_id FROM assessment_centre ac", nativeQuery=true)
	AssessmentCentre mostRecentAC();
}
