import React, { useState } from "react";
import "./R5g.css";
import { Link } from "react-router-dom";

function R5g() {
  const [code, setCode] = useState(generateCode());
  const [digits, setDigits] = useState(["_", "_", "_"]);
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function generateCode() {
    // Generate a random 3-digit code
    let code = "";
    for (let i = 0; i < 3; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code;
  }

  function handlePuzzleSolved() {
    // Update the digits with the next digit of the code
    const newDigits = [...digits];
    newDigits[puzzleIndex] = code[puzzleIndex];
    setDigits(newDigits);

    // Move to the next puzzle
    setPuzzleIndex(puzzleIndex + 1);

    // If all puzzles are solved, unlock the box
    if (puzzleIndex === 2) {
      setIsOpen(true);
    }
  }

  function renderPuzzle() {
    switch (puzzleIndex) {
      case 0:
        return <LogicPuzzle onSolved={handlePuzzleSolved} />;
      case 1:
        return <Riddle onSolved={handlePuzzleSolved} />;
      case 2:
        return <BrainTeaser onSolved={handlePuzzleSolved} />;
      default:
        return null;
    }
  }

  return (
    <div className="locked-box-challenge">
      {isOpen ? (
        <div className="unlocked-box">
          <h1 style={{ color: "#000" }}>Congratulations!</h1>
          <p style={{ color: "#000" }}>
            You have unlocked all the 5 clues and solved a Murder Mystery which
            could not be solved by a lot of high profile detectives!
          </p>
          <Link to="/"><h2>Home</h2></Link>
        </div>
      ) : (
        <div className="locked-box">
          <h2>Locked Box Challenge</h2>
          <p>
            You have discovered a locked box that requires a combination to
            open.
          </p>
          <div className="combination-lock">
            {digits.map((digit, index) => (
              <div key={index} className="digit">
                {digit}
              </div>
            ))}
          </div>
          <p>Solve the following puzzles to discover the combination:</p>
          {renderPuzzle()}
        </div>
      )}
    </div>
  );
}

function LogicPuzzle({ onSolved }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (input.toLowerCase() === "true") {
      onSolved();
    } else {
      setInput("");
      alert("Incorrect answer. Try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Logic Puzzle:</h3>
      <p>
        If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops
        Lazzies? What do you think?
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
function Riddle({ onSolved }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (input.toLowerCase() === "fire") {
      onSolved();
    } else {
      setInput("");
      alert("Incorrect answer. Try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Riddle:</h3>
      <p>
        I am always hungry, I must always be fed, The finger I touch, Will soon
        turn red. What am I?
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function BrainTeaser({ onSolved }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (input.toLowerCase() === "clue") {
      onSolved();
    } else {
      setInput("");
      alert("Incorrect answer. Try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Brain Teaser:</h3>
      <p>What is the one thing that a detective always has with him?</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default R5g;
