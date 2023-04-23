import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// import muder-home from "../../../../public/videos/muder-home.mp4"
function Home() {
  return (
    <div className="container">
      {/* <video src="../../../../public/videos/muder-home.mp4" autoPlay loop muted></video> */}
      <div className="innerBox">
        <h1 className="title">Welcome to the Mystery Quest!</h1>
        <p>
          Are you ready to put your detective skills to the test? <br /> Follow
          the clues and solve the case!
        </p>
        <p className="intro">
          You are a detective tasked with solving a high-profile murder case.
          The victim is a wealthy businessman who was found dead in his office.
          The police have gathered evidence and interviewed suspects, but they
          still haven't been able to identify the killer. The player must use
          their detective skills to analyze the evidence and solve puzzles to
          uncover the killer's identity and bring them to justice.
        </p>
        <Link to="/login">
          <button className="start-btn">Start</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
