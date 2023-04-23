import React, { useState } from "react";
import "./R1g.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { collection, addDoc, doc, updateDoc, setDoc, getDoc } from "firebase/firestore"; 
import { db } from "../../../firebase";
import {  getDocs } from "firebase/firestore"; 
const questions = [
  {
    question:
      "What is the term used to describe the intentional killing of one person by another?",
    options: ["Homicide", "Suicide", "Genocide", "Fratricide"],
    answer: "Homicide",
  },
  {
    question:
      "What is the name for the study and investigation of crime and criminals?",
    options: ["Forensics", "Criminology", "Psychology", "Sociology"],
    answer: "Criminology",
  },
  {
    question:
      "In which country was the notorious serial killer Ted Bundy active during the 1970s?",
    options: ["United States", "Canada", "Australia", "United Kingdom"],
    answer: "United States",
  },
  {
    question:
      "Which of the following is a common forensic technique used to determine a person's time of death?",
    options: [
      "Fingerprint analysis",
      "DNA profiling",
      "Autopsy",
      "Blood spatter analysis",
    ],
    answer: "Autopsy",
  },
  {
    question:
      "What is the term for a crime scene that has been left undisturbed by investigators?",
    options: [
      "Pristine scene",
      "Pure scene",
      "Unadulterated scene",
      "Primary scene",
    ],
    answer: "Pristine scene",
  },
];
const R1g = () => {
  const [answers, setAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  const [numCorrect, setNumCorrect] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
const [user,setUSer]=useState(localStorage.getItem('user'))
  const handleSubmit =async (e) => {
    e.preventDefault();
    const numCorrect = answers.reduce((acc, answer, i) => {
      return answer === questions[i].answer ? acc + 1 : acc;
    }, 0);
    const docRef = doc(db, "users",user.uid)
    try{
    updateDoc(docRef, {
      round_1: numCorrect,
    });
    console.log("Document updated with ID: ", docRef.id);
    }catch(er){
      setDoc(docRef, {
        round_1: numCorrect,
      });
    console.log("Document created with ID: ", docRef.id);
  }
    setNumCorrect(numCorrect);
    setIsSubmitted(true);
    // localStorage.setItem('round1',numCorrect)
  };

  const handleSelect = (i, answer) => {
    const newAnswers = [...answers];
    newAnswers[i] = answer;
    setAnswers(newAnswers);
  };
  const getPoints=async()=>{
    console.log(db, "users",user.uid)
    const us=JSON.parse(user)
    const docRef =await doc(db, "users",us.uid)
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        console.log(doc.data());
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  if(user)
  setUSer(JSON.parse(user))
  else{
    alert('user Not loggedin')
  }
  }
useEffect(()=>{
  console.log('one')
  getPoints()
},[])
  const resetQuiz = () => {
    setAnswers(new Array(questions.length).fill(null));
    setNumCorrect(0);
    setIsSubmitted(false);
  };

  const renderQuestion = (question, i) => {
    return (
      <div key={i} className="question">
        <h3>{question.question}</h3>
        <div className="options">
          {question.options.map((option, j) => (
            <div key={j} className="option">
              <input
                type="radio"
                name={`question-${i}`}
                value={option}
                checked={answers[i] === option}
                onChange={() => handleSelect(i, option)}
                disabled={isSubmitted}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="page">
      <div className="trivia">
        {isSubmitted ? (
          <div className="answers">
            <p>
              You answered {numCorrect} out of {questions.length} questions
              correctly.
            </p>
            {numCorrect >= 3 ? (
              <div>
                <p>You passed the First Round!</p>
                <p>You have unlocked 1st clue</p>
                <p>
                  Next Round: <Link to="/round2intro">Round 2</Link>
                </p>
              </div>
            ) : (
              <div>
                <p>
                  You need to answer at least 3 questions correctly to pass the
                  second clue.
                </p>
                <button onClick={resetQuiz}>Try Again</button>
              </div>
            )}
          </div>
        ) : (
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              {questions.map(renderQuestion)}
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default R1g;
