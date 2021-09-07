package com.fdmgroup.AssessmentCentreProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fdmgroup.AssessmentCentreProject.model.Address;


public interface AddressRepository extends JpaRepository<Address, Integer>{

}
