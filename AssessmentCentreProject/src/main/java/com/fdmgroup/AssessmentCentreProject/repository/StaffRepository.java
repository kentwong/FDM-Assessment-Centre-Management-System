package com.fdmgroup.AssessmentCentreProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.Staff;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Integer> {

}
