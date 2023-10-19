package com.backend.agriculturalsupportapp.repository;

import com.backend.agriculturalsupportapp.model.Transaction;
import com.backend.agriculturalsupportapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    @Query("SELECT COALESCE(SUM(t.amount), 0) FROM Transaction t WHERE t.user.id = :userId")
    Double getTotalAmountByUserId(@Param("userId") Long userId);

    /**
     *
     * @param user
     * @param transactionType
     * @return User's transactions provided the type of transaction
     */
    List<Transaction> findByUserAndTransactionType(User user, String transactionType);

    /**
     *
     * @param userId
     * @return A user's transactions
     */
    List<Transaction> findByUserId(Long userId);

}
