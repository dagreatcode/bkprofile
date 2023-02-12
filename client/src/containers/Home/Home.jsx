import React from "react";
import "./Home.css";
import img from "../landing.png";

export default function Home() {
  return (
    <>
      <div
        className="text-color"
        style={
          {
            // height: "200px",
            // margin: "0",
            // position: "absolute",
            // //   position: "fixed",
            // left: "0",
            // verticalAlign: "baseline",
            // //   bottom: "0%",
            // width: "100%",
            // backgroundColor: "#001D6E",
            // //   color: "white",
            // textAlign: "center",
            // position: absolute;
            // left: 0;
            // bottom: 0;
            // height: 100px;
            // width: 100%;
            // overflow: hidden;
          }
        }
      >
        <br />
        <br />
        <br />
        <br />
        <img className="img" src={img} alt="Stay safe smiley face" /> <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
// rfc
