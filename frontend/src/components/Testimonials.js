import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../stylesheets/testimonials.css";

// Individual Testimonial Component
const Testimonial = ({ testimonialText, userImage, username, role }) => {
  return (
    <div className="testimonial-container">
      <div className="progress-bar"></div>
      <div className="fas fa-quote-right fa-quote"></div>
      <div className="fas fa-quote-left fa-quote"></div>
      <p className="testimonial">{testimonialText}</p>
      <div className="user">
        <img src={userImage} alt="user" className="user-image" />
        <div className="user-details">
          <h4 className="username">{username}</h4>
          <p className="role">{role}</p>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  testimonialText: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

// Main Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      testimonialText:
        "The eCommerce functionality of this fitness app is top-notch! I can easily buy all my fitness gear and supplements in one place. Highly recommend!",
      userImage: "https://randomuser.me/api/portraits/women/46.jpg",
      username: "Lola Smith",
      role: "Marketing Specialist",
    },
    {
      testimonialText:
        "This app has completely changed the way I approach my fitness routine. The workout plans are comprehensive and easy to follow. Great job!",
      userImage: "https://randomuser.me/api/portraits/men/45.jpg",
      username: "John Doe",
      role: "Fitness Enthusiast",
    },
    {
      testimonialText:
        "As a fitness trainer, I appreciate the detailed workout plans provided by this app. It makes it easy for me to guide my clients. Plus, the eCommerce feature is a huge plus!",
      userImage: "https://randomuser.me/api/portraits/men/55.jpg",
      username: "Alex Johnson",
      role: "Personal Trainer",
    },
    {
      testimonialText:
        "I love how I can shop for fitness equipment and supplements directly within the app. It saves me so much time and effort. Highly recommend this app to everyone!",
      userImage: "https://randomuser.me/api/portraits/women/65.jpg",
      username: "Emily Clark",
      role: "Gym Owner",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonial-wrapper">
      <Testimonial
        testimonialText={testimonials[currentIndex].testimonialText}
        userImage={testimonials[currentIndex].userImage}
        username={testimonials[currentIndex].username}
        role={testimonials[currentIndex].role}
      />
    </div>
  );
};

export default Testimonials;
