package com.fdmgroup.AssessmentCentreProject.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.Staff;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Integer> {
	
	Optional<Staff> findByEmail(String email);
}
