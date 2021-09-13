package com.fdmgroup.AssessmentCentreProject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.Candidate;


@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer>{

	@Query (value = "SELECT * FROM candidate c WHERE c.status = :searchterm", nativeQuery=true)
	List<Candidate> pendingStatus(@Param("searchterm") String status);
	
}
