import React from "react";
import { Link } from "react-router-dom";
import "./Round5.css";
const Round5 = () => {
  return (
    <>
      <div className="out">
        <div className="container1">
          <div className="innerBox1">
            <h1 className="title1">The Final Challenge</h1>
            <p>
              You are given with a box which has to be unlocked using a 3 digit
              pin. <br /> You need to answer 3 one word answer riddles in order
              to unlock the box. <br /> This is your last challenge. <br />
            </p>
            <p style={{color: "red", fontSize: "30px"}}>Careful this is a Dead End Round</p>
            <h1 className="title1">All the Best!</h1>
            <Link to="/round5">
              <button className="start-btn1">Start</button>
            </Link>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Round5;
