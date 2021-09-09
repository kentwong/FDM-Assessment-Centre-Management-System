package com.fdmgroup.AssessmentCentreProject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentreResponse;


@Repository
public interface AssessmentCentreResponseRepository extends JpaRepository<AssessmentCentreResponse, Integer>{

	@Query(
			value="select * from assessment_centre_response a inner join question q on a.question_id=q.id",
			nativeQuery = true)
	List<AssessmentCentreResponse> groupedAndJoined();
}
