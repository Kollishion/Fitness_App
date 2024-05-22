package com.fitness.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.beans.User;
import com.fitness.repository.UserRepository;
import com.fitness.security.OTPGenerator;

import jakarta.mail.MessagingException;

@Service
public class UserService 
{

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private OtpEmailService otpEmailService;

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User save(User user) {
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
