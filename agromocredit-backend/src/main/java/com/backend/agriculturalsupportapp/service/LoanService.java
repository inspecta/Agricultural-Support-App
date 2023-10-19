package com.backend.agriculturalsupportapp.service;

import com.backend.agriculturalsupportapp.model.Loan;
import com.backend.agriculturalsupportapp.model.LoanProvider;
import com.backend.agriculturalsupportapp.model.User;
import com.backend.agriculturalsupportapp.repository.LoanProviderRepository;
import com.backend.agriculturalsupportapp.repository.LoanRepository;
import com.backend.agriculturalsupportapp.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoanService {
    private final LoanRepository loanRepository;
    private final UserRepository userRepository;
    private final LoanProviderRepository loanProviderRepository;

    public LoanService(LoanRepository loanRepository, UserRepository userRepository, LoanProviderRepository loanProviderRepository) {
        this.loanRepository = loanRepository;
        this.userRepository = userRepository;
        this.loanProviderRepository = loanProviderRepository;
    }

    public ResponseEntity<String> saveLoan(Loan loan, Long user_id) {
        Optional<User> optionalUser = userRepository.findById(user_id);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Set the user who took one the loan
            loan.setUser(user);

            loanRepository.save(loan);
            return ResponseEntity.ok("Loan saved successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }
    }

    public ResponseEntity<String> saveLoanProvider(LoanProvider loanProvider) {
        loanProviderRepository.save(loanProvider);
        return ResponseEntity.ok("Loan provider saved!");
    }
}
