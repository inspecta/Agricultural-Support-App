package com.backend.agriculturalsupportapp.controller;

import com.backend.agriculturalsupportapp.model.Transaction;
import com.backend.agriculturalsupportapp.model.User;
import com.backend.agriculturalsupportapp.repository.TransactionRepository;
import com.backend.agriculturalsupportapp.repository.UserRepository;
import com.backend.agriculturalsupportapp.service.TransactionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://192.168.1.117:8081")
public class TransactionController {

    private final TransactionService transactionService;
    private final UserRepository userRepository;
    private final TransactionRepository transactionRepository;

    public TransactionController(TransactionService transactionService, UserRepository userRepository, TransactionRepository transactionRepository) {
        this.transactionService = transactionService;
        this.userRepository = userRepository;
        this.transactionRepository = transactionRepository;
    }

    @PostMapping("/add-transaction")
    public Transaction addTransaction(@RequestBody Transaction transaction, @RequestParam Long userId) {
        return transactionService.addTransaction(transaction, userId);
    }

    @GetMapping("/transactions/{userId}")
    public List<Transaction> userTransactions(@PathVariable Long userId) {
        return transactionService.getUserTransactions(userId);
    }

    @GetMapping("/calculate-credit-score/{userId}")
    public ResponseEntity<?> calculateCreditScore(@PathVariable Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        List<Transaction> transactions = transactionRepository.findByUserId(userId);

        if (!userOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        User user = userOptional.get();

        if (user != null && !transactions.isEmpty()) {
            int creditScore = transactionService.calculateCreditScore(user, transactions);
            return ResponseEntity.status(HttpStatus.OK).body(creditScore);
        }

        return ResponseEntity.status(HttpStatus.OK).body("0");
    }


}
