import React from "react";
import { Link } from "react-router-dom";
import "./Round4.css";
const Round4 = () => {
  return (
    <>
      <div className="out">
        <div className="container1">
          <div className="innerBox1">
            <h1 className="title1">Swap Challenge</h1>
            <p>
              You are given with cards that continously swap, you neeed to select as many pairs as possible in the given time.
            </p>
            <Link to="/round4">
              <button className="start-btn1">Start</button>
            </Link>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Round4;
