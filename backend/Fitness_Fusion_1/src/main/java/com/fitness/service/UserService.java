package com.fitness.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.beans.User;
import com.fitness.repository.UserRepository;
import com.fitness.security.OTPGenerator;

import jakarta.mail.MessagingException;

@Service
public class UserService {

    @SuppressWarnings("unused")
	private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private OtpEmailService otpEmailService;
    
    public List<User> getAllUser(){
		return userRepository.findAll();
	}

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User save(User user) throws Exception {
        // Validate user input if necessary
        if (user.getEmail() == null || user.getPassword() == null) {
            throw new Exception("Email and Password are required");
        }
        // Ensure email is unique
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new Exception("Email already exists");
        }
        return userRepository.save(user);
    }
    
    public String generateAndSendOtp(String email) throws MessagingException {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            String otp = OTPGenerator.generateOTP();
            user.setOtp(otp);
            userRepository.save(user);
            otpEmailService.sendOTPEmail(email, otp);
            return "OTP sent to email: " + email;
        } else {
            return "User not found with email: " + email;
        }
    }

    public boolean validateOtp(String email, String otp) {
        User user = userRepository.findByEmail(email);
        if (user != null && otp.equals(user.getOtp())) {
            user.setOtp(null); // Clear OTP after validation
            userRepository.save(user);
            return true;
        }
        return false;
    }
}
