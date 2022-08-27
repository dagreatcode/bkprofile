// import React, { useState, useEffect } from "react";
import profileImg from "../landing.png"

export default function About() {
  // const [useMyState, setMyUseState] = useState();
  // useEffect(() => {}, []);

  return (
    <>
      <div className="text-color cardStyle">
        <div class="card">
          <img src={profileImg} class="card-img-top" alt="Barbara Kendrick" />
          <div class="card-body">
            <h5 class="card-title">Here is a little about me...</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
