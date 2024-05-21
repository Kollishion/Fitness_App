package com.fitness.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class OtpEmailService {
	@Autowired
	private JavaMailSender mailSender;
	public void sendOTPEmail(String to, String otp) throws MessagingException {
		MimeMessage message = mailSender.createMimeMessage();
	    MimeMessageHelper helper = new MimeMessageHelper(message);
	    helper.setTo(to);
	    helper.setSubject("Your OTP Code.");
	    helper.setText("Your OTP code is: " + otp);
	    mailSender.send(message);
	    }
	}
