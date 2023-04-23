import React from "react";
import { Link } from "react-router-dom";
import "./Round3.css";
const Round3 = () => {
  return (
    <>
      <div className="out">
        <div style={{marginTop: "270px"}} className="container1">
          <div className="innerBox1">
            <h1 style={{marginTop: "0px"}} className="title1">Find Key</h1>
            <p>
              1. In this round, the player needs to find the key to the locked room
              by correctly answering the riddle. <br />
              2. The riddle is displayed on the screen along with a timer that
              shows how much time is left to find the key. <br />
              3. The player needs to enter their answer in the input field provided
              and click the "Submit" button. <br />
              4. If the answer is correct, the player will see a message saying
              "Correct! You found the key." <br />
              5. If the answer is incorrect, the player will not receive the key
              and the score will remain the same. <br />
              6. The player needs to answer before the timer runs out, otherwise
              they will lose the round and the message "Time's up! <br /> Better
              luck next time!" will be displayed. After the round is over, the
              player can proceed to the next round or choose to play this round
              again. <br />
            </p>
            <p style={{color: "red", fontSize: "30px"}}>Careful this is a Dead End Round</p>
            <Link to="/round3">
              <button className="start-btn1">Start</button>
            </Link>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Round3;
