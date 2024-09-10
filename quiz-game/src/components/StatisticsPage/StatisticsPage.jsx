import "./StatisticsPage.css";
import React, { useContext } from "react";
import { QuizContext } from "../QuizContext";

export const StatisticsPage = () => {
  const { quizData } = useContext(QuizContext);
  const { selectedQuestions, usersAnswers } = quizData;

  return (
    <div className="statistic-page">
      <div className="list-questions">
        {selectedQuestions.map((question, index) => (
          <div key={index} className="question-result">
            <span>{`Вопрос ${index + 1}`}</span>
            {usersAnswers[index] === question.correctAnswer ? (
              <span className="result correct">✔️</span>
            ) : (
              <span className="result incorrect">❌</span>
            )}
          </div>
        ))}
      </div>
      <div className="list-answers">
        {selectedQuestions.map((question, index) => (
          <div
            key={index}
            className={`answer-container ${
              usersAnswers[index] === question.correctAnswer
                ? "correct-answer"
                : "incorrect-answer"
            }`}
          >
            <p className="question-text">{question.question}</p>
            <ul>
              {question.options.map((option, optIndex) => (
                <li
                  key={optIndex}
                  className={`answer-option ${
                    option === usersAnswers[index] ? "user-answer" : ""
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div className="answers-summary">
              <div className="user-answer-container">
                <strong>Ваш ответ:</strong>{" "}
                {usersAnswers[index]}
              </div>
              <div className="correct-answer-container">
                <strong>Правильный ответ:</strong>{" "}
                {question.correctAnswer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
