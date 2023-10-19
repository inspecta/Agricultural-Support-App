package com.backend.agriculturalsupportapp.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "loans")
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Amount of loan that was taken out
     * Maximum of 500K
     */
    private Double amount;
    /**
     * Percentage depending on the Loan provider
     */
    @Column(name = "interest_rate")
    @JsonProperty("interest_rate")
    private Double interestRate;

    /**
     * The user who took out the loan
     */
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "loan_provider_id")
    @JsonProperty("loan_provider_id")
    private LoanProvider loanProvider;

}
