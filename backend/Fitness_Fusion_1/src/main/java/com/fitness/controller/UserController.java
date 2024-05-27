package com.fitness.controller;

import java.util.Base64;
import java.util.Collections;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;
    @Autowired
    private MailService mailService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        try {
            User existingUser = userService.findByEmail(user.getEmail());
            if (existingUser != null && existingUser.getPassword().equals(user.getPassword()) 
                    && existingUser.getAnswer().equals(user.getAnswer())) { // Validate the security answer
                String token = generateFakeJWT(user); // Replace with actual JWT generation
                return ResponseEntity.ok().body(Collections.singletonMap("token", token));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email, password, or security answer");
            }
        } catch (Exception e) {
            logger.error("Login error: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Login error: " + e.getMessage());
        }
    }


    @GetMapping("/security-question")
    public ResponseEntity<?> getSecurityQuestion(@RequestParam String email) {
        try {
            User user = userService.findByEmail(email); 
            if (user != null) {
                return ResponseEntity.ok(Collections.singletonMap("security_question", user.getSecurity_question()));
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            logger.error("Error fetching security question: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching security question: " + e.getMessage());
        }
    }

    @PostMapping("/validate-security-answer")
    public ResponseEntity<?> validateSecurityAnswer(@RequestBody User user) {
        try {
            User existingUser = userService.findByEmail(user.getEmail());
            if (existingUser != null && existingUser.getAnswer().equals(user.getAnswer())) {
                // If valid, proceed with password reset
                return ResponseEntity.ok().body("Security answer validated. Proceed to reset password.");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid security answer");
            }
        } catch (Exception e) {
            logger.error("Validation error: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Validation error: " + e.getMessage());
        }
    }



    private String generateFakeJWT(User user) {
        // Generate a fake JWT for the purpose of this example
        String header = Base64.getEncoder().encodeToString("{\"alg\":\"HS256\",\"typ\":\"JWT\"}".getBytes());
        String payload = Base64.getEncoder().encodeToString(("{\"sub\":\"" + user.getUser_id() + "\",\"name\":\"" + user.getUsername() + "\",\"iat\":" + System.currentTimeMillis() / 1000 + "}").getBytes());
        String signature = "fake_signature";
        return header + "." + payload + "." + signature;
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveUser(@RequestBody User user) {
        try {
            User savedUser = userService.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
        } catch (Exception e) {
            logger.error("Error saving user: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving user: " + e.getMessage());
        }
    }
    
    // Sending Mail
    @PostMapping("/sendMail")
    public ResponseEntity<String> sendMail(@RequestBody EmailRequest emailRequest) {
        try {
            String response = mailService.sendMail(emailRequest.getTo(), emailRequest.getSubject(), emailRequest.getText());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error sending mail: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error sending mail: " + e.getMessage());
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
            logger.error("Error sending OTP: ", e);
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
