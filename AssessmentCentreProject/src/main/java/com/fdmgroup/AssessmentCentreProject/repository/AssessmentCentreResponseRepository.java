package com.fdmgroup.AssessmentCentreProject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
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
	
	@Modifying
	@Query(
			value = "SELECT A.*, S.id, S.first_name, S.last_name "
					+ "FROM ASSESSMENT_CENTRE_RESPONSE A "
					+ "INNER JOIN STAFF S "
					+ "ON A.fk_interviewer_id = S.id "
					+ "WHERE A.candidate_id = ?1 "
					+ "AND A.fk_interviewer_id = ?2", 
			nativeQuery = true)
	List<AssessmentCentreResponse> findByCandidateIdJoinInterviewer(Integer candidateId, Integer interviewerId);
}
