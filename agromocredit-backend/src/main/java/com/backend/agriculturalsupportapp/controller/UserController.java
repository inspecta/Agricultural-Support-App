package com.backend.agriculturalsupportapp.controller;

import com.backend.agriculturalsupportapp.model.Login;
import com.backend.agriculturalsupportapp.model.User;
import com.backend.agriculturalsupportapp.repository.UserRepository;
import com.backend.agriculturalsupportapp.service.TransactionService;
import com.backend.agriculturalsupportapp.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://192.168.1.117:8081")
public class UserController {

    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    private final TransactionService transactionService;

    public UserController(UserService userService, BCryptPasswordEncoder passwordEncoder, UserRepository userRepository, TransactionService transactionService) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.transactionService = transactionService;
    }

    @PostMapping("/register-user")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login-user")
    public ResponseEntity<Object> loginUser(@RequestBody Login login) {
        Optional<User> optionalUser = userService.getUserByPhoneNumber(login.getPhoneNumber());

        if (!optionalUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
        }

        User user = optionalUser.get();

        if (!user.getPhoneNumber().equals(login.getPhoneNumber()) || !passwordEncoder.matches(login.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @GetMapping("/{userId}/get-balance")
    public ResponseEntity<Double> getUserBalance(@PathVariable Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return ResponseEntity.ok(user.getBalance());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{userId}/total-earned")
    public Double getTotalEarned(@PathVariable Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found!"));
        return transactionService.getTotalEarned(user);
    }

    @GetMapping("/{userId}/total-credit")
    public Double getTotalCredit(@PathVariable Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found!"));
        return transactionService.getTotalCredit(user);
    }

}
