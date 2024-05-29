import React from "react";
import "../stylesheets/workout.css";
import Beginner2 from "../assets/images/Beginner2.jpg";
import Intermediate2 from "../assets/images/Intermediate2.jpg";
import Advanced2 from "../assets/images/Advanced2.jpg";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Workout = () => {
  return (
    <div className="Workout_Parent">
      <section className="Workout_Container">
        <div className="container">
          <div className="card">
            <div className="card-inner" style={{ "--clr": "antiquewhite" }}>
              <div className="box">
                <div className="imgBox">
                  <img src={Beginner2} alt="Beginner" />
                </div>
                <div className="icon">
                  <Link to="/beginner_workout" className="iconBox">
                    <span className="material-symbols-outlined">
                      <MdArrowOutward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="content">
              <h3>Beginner</h3>
              <p>
                For people just starting out <br />
                <span>(Recomended for most people)</span>
              </p>
              <ul>
                <li className="branding" style={{ "--clr-tag": "#84CC16" }}>
                  Free
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-inner" style={{ "--clr": "antiquewhite" }}>
              <div className="box">
                <div className="imgBox">
                  <img src={Intermediate2} alt="Advanced" />
                </div>
                <div className="icon">
                  <Link to="/intermediate_workout" className="iconBox">
                    <span className="material-symbols-outlined">
                      <MdArrowOutward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="content">
              <h3>Intermediate</h3>
              <p>
                For individuals with decent workout experience and ready to take
                the next step
              </p>
              <ul>
                <li className="branding" style={{ "--clr-tag": "#FF3131" }}>
                  Premium Only
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-inner" style={{ "--clr": "antiquewhite" }}>
              <div className="box">
                <div className="imgBox">
                  <img src={Advanced2} alt="Advanced" />
                </div>
                <div className="icon">
                  <Link to="/advanced_workout" className="iconBox">
                    <span className="material-symbols-outlined">
                      <MdArrowOutward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="content">
              <h3>Advanced</h3>
              <p>
                For hardcore workout enthusiasts and individuals with experience
              </p>
              <ul>
                <li className="packaging" style={{ "--clr-tag": "#FF3131" }}>
                  Premium Only
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workout;
