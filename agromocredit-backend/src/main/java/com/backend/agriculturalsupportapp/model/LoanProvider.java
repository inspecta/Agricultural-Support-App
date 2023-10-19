package com.backend.agriculturalsupportapp.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "loan_provider")
public class LoanProvider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    /**
     * Loan limit for the provider
     */
    @Column(name = "provider_loan_limit")
    @JsonProperty("provider_loan_limit")
    private double ProviderLoanLimit;

    public LoanProvider(Long id) {
        this.id = id;
    }
}
