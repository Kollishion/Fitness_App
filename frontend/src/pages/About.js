import React from "react";
import "../stylesheets/about.css";
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
</head>;

function About() {
  return (
    <div className="parent">
      <div className="container">
        <header>
          <h1>Fitness Fusion</h1>
          <h4>Your All-in-One Fitness Destination</h4>
        </header>

        <section>
          <h4>About Fitness Fusion</h4>
          <p>
            Fitness Fusion is more than just an online store; it's your complete
            fitness companion, empowering you to achieve your health and
            wellness goals. We believe in a holistic approach to fitness,
            providing everything you need to transform your body and mind.
          </p>
        </section>

        <section>
          <h4>Shop Top-Tier Equipment, Apparel, and Supplements</h4>
          <p>
            Gear Up: Find the perfect equipment to fuel your workouts, whether
            you're a seasoned athlete or just starting out. We offer a wide
            selection of weights, machines, cardio equipment, and everything in
            between, all from trusted brands.
          </p>
          <p>
            Fuel Your Fitness: Explore our extensive range of high-quality
            supplements to optimize your performance. From protein powders to
            pre-workout formulas and recovery aids, we have the products to help
            you reach your full potential.
          </p>
          <p>
            Look and Feel Your Best: Rep your dedication in style with our
            fitness apparel and merchandise. Find comfortable, functional
            clothing that motivates you and makes you feel confident during your
            workouts.
          </p>
          <button className="button-primary">Shop Equipment</button>
          <button className="button-secondary">Shop Supplements</button>
          <button className="button-tertiary">Shop Apparel</button>
        </section>

        <section>
          <h4>Our Workout Programs</h4>
          <i>Beginner:</i>
          <p>
            New to fitness? Our beginner-friendly workouts are a perfect
            starting point. Learn proper form, build foundational strength, and
            ease your way into an exercise routine.
          </p>
          <i>Intermediate (Premium Membership):</i>
          <p>
            Take your workouts to the next level with our intermediate programs.
            These routines challenge you further, helping you build muscle,
            improve endurance, and see results faster.
          </p>
          <i>Advanced (Premium Membership):</i>
          <p>
            Unlock the full potential of your fitness journey with our advanced
            exercise library (available with a premium membership). Push your
            limits with challenging workouts designed to optimize your
            performance and achieve your most ambitious fitness goals.
          </p>
          <button className="button-primary">Explore Free Workouts</button>
          <button className="button-secondary">Join Premium Membership</button>
        </section>

        <section>
          <h4>Why Choose Premium Membership?</h4>
          <p>
            We offer a range of free exercise programs to get you started.
            However, if you're serious about taking your fitness to the next
            level, a premium membership unlocks a treasure trove of benefits:
          </p>
          <ul>
            <li>Access to our extensive library of advanced workouts</li>
            <li>Personalized workout plans tailored to your goals</li>
            <li>Exclusive training tips and techniques from fitness experts</li>
            <li>Progress tracking tools to monitor your achievements</li>
          </ul>
          <button className="button-primary">Learn More</button>
          <button className="button-secondary">Sign Up Now</button>
        </section>

        <section className="project-details">
          <h6>Your fitness is our goal</h6>
          <div>
            <i className="fas fa-user-tie"></i>
            <span>Arghyadeep Kindu</span> - Manager of the project
          </div>
          <div>
            <i className="fas fa-user"></i>
            <span>Abhishekh Bose</span> - Lead of the project
          </div>
          <div>
            <i className="fas fa-paint-brush"></i>
            <span>Mashud Hossen</span> - Project designer
          </div>
          <div>
            <i className="fas fa-lightbulb"></i>
            <span>Aarchisman Mukarjee</span> - Support & creative-design
          </div>
          <div>
            <i className="fas fa-lightbulb"></i>
            <span>Chadu</span> - Support & creative-design
          </div>
          <div>
            <i className="fas fa-tasks"></i>
            <span>Ankush Ghosh</span> - Support and miscellaneous project
            related works
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
