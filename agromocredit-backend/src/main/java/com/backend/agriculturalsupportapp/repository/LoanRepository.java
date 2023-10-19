package com.backend.agriculturalsupportapp.repository;

import com.backend.agriculturalsupportapp.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan, Long> {
}
