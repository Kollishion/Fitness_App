package com.fitness.repository;

import com.fitness.beans.Admin;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
	Optional<Admin> findByAdminEmail(String email);
}
