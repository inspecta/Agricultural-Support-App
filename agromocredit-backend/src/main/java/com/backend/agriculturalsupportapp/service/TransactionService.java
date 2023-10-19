package com.backend.agriculturalsupportapp.service;

import com.backend.agriculturalsupportapp.model.Transaction;
import com.backend.agriculturalsupportapp.model.User;
import com.backend.agriculturalsupportapp.repository.TransactionRepository;
import com.backend.agriculturalsupportapp.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    public final TransactionRepository transactionRepository;
    private final UserRepository userRepository;

    public TransactionService(TransactionRepository transactionRepository, UserRepository userRepository) {
        this.transactionRepository = transactionRepository;
        this.userRepository = userRepository;
    }

    /**
     *
     * @param transaction - Transaction details
     * @param userId - Owner of the account
     * @return
     * Everytime a transaction is made, it's added to the transactions table
     * All with the details of the user
     */
    public Transaction addTransaction(Transaction transaction, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException(("User not found.")));

        Double currentBalance = user.getBalance();
        Double transactionAmount = transaction.getAmount();

        if("Request Payment".equals(transaction.getTransactionType())) {
            Double newBalance = currentBalance + transactionAmount;
            user.setBalance(newBalance);
        } else if ("Withdraw".equals(transaction.getTransactionType())) {
            if (currentBalance >= transactionAmount) {
                Double newBalance = currentBalance - transactionAmount;
                user.setBalance(newBalance);
            } else {
                throw new IllegalArgumentException("Insufficient balance for withdrawal.");
            }
        } else {
            throw new IllegalArgumentException("Invalid transaction type.");
        }

        transaction.setUser(user);
        userRepository.save(user);
        return transactionRepository.save(transaction);
    }

    /**
     *
     * @param user
     * @return Total amount received from payments
     */
    public Double getTotalEarned(User user) {
        List<Transaction> requestPaymentTransactions = transactionRepository.findByUserAndTransactionType(user, "Request Payment");
        return requestPaymentTransactions.stream().mapToDouble(Transaction::getAmount).sum();
    }

    /**
     *
     * @param user
     * @return Total amount in Withdraws
     */
    public Double getTotalCredit(User user) {
        List<Transaction> withdrawTransactions = transactionRepository.findByUserAndTransactionType(user, "Withdraw");
        return withdrawTransactions.stream().mapToDouble(Transaction::getAmount).sum();
    }

    /**
     *
     * @param userId
     * @return List of user's transactions
     * Formart - Transaction Object
     */
    public List<Transaction> getUserTransactions(Long userId) {
        return transactionRepository.findByUserId(userId);
    }

    /**
     *
     * @param user
     * @param transactions
     * @return
     */
    public int calculateCreditScore(User user, List<Transaction> transactions) {
        double creditScore = 0;
        double balance = user.getBalance();

        if (balance >= 1000.0) {
            creditScore += 3;
        } else if (balance >= 500.0) {
            creditScore += 2;
        } else if (balance >= 100.0) {
            creditScore += 1;
        }

        int numberOfTransactions = transactions.size();
        if (numberOfTransactions >= 5) {
            creditScore += 3;
        } else if (numberOfTransactions >= 3) {
            creditScore += 2;
        } else if (numberOfTransactions >= 1) {
            creditScore += 1;
        }

        creditScore = Math.min(10, Math.max(0, creditScore));

        return (int) creditScore;
    }

}
