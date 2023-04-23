import React from "react";
import { Link } from "react-router-dom";
import "./Round1.css";
const Round1 = () => {
  return (
    <>
      <div className="out1">
        <div className="container1">
          <div className="innerBox1">
            <h1 className="title1">"Visual Puzzle Challenge"</h1>
            <p>
              "Can you solve this visual puzzle? Look closely at the image and
              try to find the hidden message."
            </p>
            <Link to="/round1">
              <button className="start-btn1">Start</button>
            </Link>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Round1;
