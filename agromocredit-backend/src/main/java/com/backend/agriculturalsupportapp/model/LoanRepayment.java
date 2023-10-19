package com.backend.agriculturalsupportapp.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class LoanRepayment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double amount;
    private Date repaymentDate;

    @ManyToOne
    @JoinColumn(name = "loan_id")
    private Loan loan;
}
