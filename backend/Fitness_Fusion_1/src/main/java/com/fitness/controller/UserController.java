package com.fitness.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.mail.MessagingException;

import com.fitness.beans.EmailRequest;
import com.fitness.beans.User;
import com.fitness.service.MailService;
import com.fitness.service.UserService;

@RestController
@RequestMapping("/user")
//@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private MailService mailService;

    //Sign in
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User existingUser = userService.findByEmail(user.getEmail());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
    
    //Sign up
    @PostMapping("/save")
    public ResponseEntity<?> saveUser(@RequestBody User user) {
        try {
            User savedUser = userService.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving user: " + e.getMessage());
        }
    }
    
    //Sending Mail
    @PostMapping("/sendMail")
    public ResponseEntity<String> sendMail(@RequestBody EmailRequest emailRequest) {
        String response = mailService.sendMail(emailRequest.getTo(), emailRequest.getSubject(), emailRequest.getText());
        if ("Mail sent successfully".equals(response)) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/sendmail")
    public String sendMail(@RequestParam String to, @RequestParam String subject, @RequestParam String text) {
        return mailService.sendMail(to, subject, text);
    }
    
    @PostMapping("/generate-otp")
    public ResponseEntity<String> generateOtp(@RequestParam String email) {
        try {
            String response = userService.generateAndSendOtp(email);
            return ResponseEntity.ok(response);
        } catch (MessagingException e) {
            return ResponseEntity.status(500).body("Error sending OTP: " + e.getMessage());
        }
    }

    @PostMapping("/validate-otp")
    public ResponseEntity<String> validateOtp(@RequestParam String email, @RequestParam String otp) {
        boolean isValid = userService.validateOtp(email, otp);
        if (isValid) {
            return ResponseEntity.ok("OTP is valid");
        } else {
            return ResponseEntity.status(400).body("Invalid OTP");
        }
    }
} 
