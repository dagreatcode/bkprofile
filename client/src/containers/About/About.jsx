// import React, { useState, useEffect } from "react";
import profileImg from "../landing.png";

export default function About() {
  // const [useMyState, setMyUseState] = useState();
  // useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">

          </div>
          <div className="col-sm-6">
            <div className="cardStyle ">
              <div class="card text-color">
                <img
                  src={profileImg}
                  class="card-img-top"
                  alt="Barbara Kendrick"
                />
                <div class="card-body mynav">
                  <h5 class="card-title">Here is a little about me...</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            
          </div>
        </div>
      </div>
    </>
  );
}
