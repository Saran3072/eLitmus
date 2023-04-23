import React from "react";
import { Link } from "react-router-dom";
import "./Round2.css";
const Round2 = () => {
  return (
    <>
      <div className="out">
        <div className="container1">
          <div className="innerBox1">
            <h1 className="title1">"Word Jumble Challenge"</h1>
            <p>
              "Unscramble the letters to form a word related to crime. You have
              20 seconds to make each guess. Guess 8 out of 10 correctly to move
              on to the next challenge."
            </p>
            <Link to="/round2">
              <button className="start-btn1">Start</button>
            </Link>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Round2;
