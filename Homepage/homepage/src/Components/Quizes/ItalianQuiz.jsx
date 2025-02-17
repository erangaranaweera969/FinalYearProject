import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ItalianQuiz.css";
import { italianData } from "../../assets/italiandata.js";
import logo from "../../assets/Logo.png"; 

const ItalianQuiz = () => {
    const navigate = useNavigate();

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(italianData[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);
    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore((prev) => prev + 1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans - 1].current.classList.add("correct");
            }
        }
    };

    const next = () => {
        if (lock) {
            if (index === italianData.length - 1) {
                setResult(true);
                return;
            }
            setIndex((prevIndex) => prevIndex + 1);
            setQuestion(italianData[index + 1]);
            setLock(false);

            option_array.forEach((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
            });
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(italianData[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    };

    return (
        <div className="quiz-container">
            {/* Logo & Website Name */}
            <div className="quiz-header">
                <img src={logo} alt="Website Logo" className="quiz-logo" />
                <h1 className="quiz-title">Language Master</h1>
            </div>

            {/* Quiz Content */}
            <div className="quiz-content">
                <h2>Italian Quiz</h2>
                <hr />
                {result ? (
                    <>
                        <h2>You Scored {score} out of {italianData.length}</h2>
                        <button onClick={reset}>Reset</button>
                    </>
                ) : (
                    <>
                        <h2>{index + 1}. {question.question}</h2>
                        <ul>
                            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
                            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
                            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
                            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
                        </ul>
                        <button onClick={next}>Next</button>
                        <div className="index">{index + 1} of {italianData.length} questions</div>
                    </>
                )}
                <button className="backBtn" onClick={() => navigate("/lessons")}>Back to Lessons</button>
            </div>
        </div>
    );
};

export default ItalianQuiz;
