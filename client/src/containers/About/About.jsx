// import React, { useState, useEffect } from "react";
import profileImg from "../landing.png";
import React,{Link} from "react-router-dom";
import "./About.css";

export default function About() {
  // const [useMyState, setMyUseState] = useState();
  // useEffect(() => {}, []);
  window.scrollTo(0, 0);
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 style={{ color: "#FAEA48" }}>About me</h1>
        </div>
        <div className="row">
            <div className="cardStyle">          
              <img
              src={profileImg}
              className="card-img-top"
              alt="Barbara Kendrick"
              />
            </div>
            <div>
            <h5 className="card-title">Here is a little about me...</h5>
                  <p style={{ color: "#FAEA48", backgroundColor: "#3330E4" }} className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a
                    href="https://fashion-commit.onrender.com/"
                    className="btn" 
                    style={{ color: "#3330E4", backgroundColor: "#F637EC" }}
                  >
                    Blog
                  </a>
                  <Link
                    to="/Contact"
                    className="btn"
                    style={{ color: "#3330E4", backgroundColor: "#F637EC" }}
                  >
                    Appointments
                  </Link>
          </div>
        </div>
      </div>
    </>
  );
}
