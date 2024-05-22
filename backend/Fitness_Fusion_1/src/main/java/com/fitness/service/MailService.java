package com.fitness.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {
	@Autowired
    private JavaMailSender mailSender;

    public String sendMail(String to, String subject, String text) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);//Recipient Address
            message.setSubject(subject);//subject
            message.setText(text);//body
            mailSender.send(message);//sending the mail
            return "Mail sent successfully!!!!";
        } catch (Exception e) {
            return "Error sending mail: " + e.getMessage();
        }
    }
}