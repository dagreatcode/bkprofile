// import React, { useState, useEffect } from "react";
import profileImg from "../landing.png";
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
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="cardStyle">
              <div className="card text-color">
                <img
                  src={profileImg}
                  className="card-img-top"
                  alt="Barbara Kendrick"
                />
                <div className="card-body mynav">
                  <h5 className="card-title">Here is a little about me...</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a
                    href="/"
                    className="btn"
                    style={{ color: "#3330E4", backgroundColor: "#F637EC" }}
                  >
                    Portfolio
                  </a>
                  <a
                    href="/"
                    className="btn"
                    style={{ color: "#3330E4", backgroundColor: "#F637EC" }}
                  >
                    Appointments
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="new-card"></div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div></div>
    </>
  );
}
