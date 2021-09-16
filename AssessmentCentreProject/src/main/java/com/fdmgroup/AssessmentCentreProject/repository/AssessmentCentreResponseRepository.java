package com.fdmgroup.AssessmentCentreProject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.AssessmentCentreResponse;


@Repository
public interface AssessmentCentreResponseRepository extends JpaRepository<AssessmentCentreResponse, Integer>{

	@Query(
			value="select a.*, q.question_type, sum(a.points) as Problem\r\n" + 
					"from assessment_centre_response a\r\n" + 
					"inner join question q \r\n" + 
					"on a.question_id=q.id\r\n" + 
					"group by a.candidate_id",
			nativeQuery = true)
	List<AssessmentCentreResponse> groupedAndJoined();
	
	List<AssessmentCentreResponse> findByCandidateId(int candidateId);
	
}
