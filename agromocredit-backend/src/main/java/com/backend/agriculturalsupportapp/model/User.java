package com.backend.agriculturalsupportapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * Both First and Last names
     * The other name can be added if available
     */
    private String name;
    /**
     * Optional.
     * Only farmers with emails will provide this
     */
    private String email;
    /**
     * Validation of this number is important
     * It should be an MTN number
     * All MTN starting MSISDN codes required
     */
    @Column(name = "phone_number")
    private String phoneNumber;
    /**
     * Encoded password using BCryptEncoder
     */
    private String password;

    /**
     * User balance
     */
    private Double balance = 0.0;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime created_at;

    @PrePersist
    private void onCreate() {
        created_at = LocalDateTime.now();
    }

}
