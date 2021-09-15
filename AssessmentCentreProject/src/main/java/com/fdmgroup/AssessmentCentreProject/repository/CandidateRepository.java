package com.fdmgroup.AssessmentCentreProject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.Candidate;


@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer>{
			
	@Query (value = "SELECT * FROM candidate c WHERE c.status = :status AND recruiter_id = :recruiterId", nativeQuery=true)
	List<Candidate> pendingStatusPerRecruiter(@Param("status") String status, @Param("recruiterId") int recruiterId);		
			
	@Query (value = "SELECT * FROM candidate c WHERE c.status = :searchterm", nativeQuery=true)
	List<Candidate> pendingStatus(@Param("searchterm") String status);
	
	@Query(value="SELECT * FROM candidate c WHERE c.recruiter_id IS NULL", nativeQuery=true)
	List<Candidate> applicationsPending();
	
}
