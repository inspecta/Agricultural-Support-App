package com.backend.agriculturalsupportapp.controller;

import com.backend.agriculturalsupportapp.model.Loan;
import com.backend.agriculturalsupportapp.model.LoanProvider;
import com.backend.agriculturalsupportapp.model.User;
import com.backend.agriculturalsupportapp.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://192.168.1.117:8081")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @PostMapping("/save-loan/{user_id}")
    public ResponseEntity<String> addLoan(@RequestBody Loan loan, @PathVariable Long user_id) {
        return loanService.saveLoan(loan, user_id);
    }

    @PostMapping("/save-loan-provider")
    public ResponseEntity<String> saveLoanProvider(@RequestBody LoanProvider loanProvider) {
        return loanService.saveLoanProvider(loanProvider);
    }

}
