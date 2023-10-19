package com.backend.agriculturalsupportapp.repository;

import com.backend.agriculturalsupportapp.model.LoanProvider;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanProviderRepository extends JpaRepository<LoanProvider, Long> {
}
