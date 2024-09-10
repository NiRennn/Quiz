import React from "react";
import './QuestionComp.css';

function QuestionComp({ 
  currentQuestion, 
  animeQuizQuestions, 
  usersAnswers, 
  handleAddUserAnswer, 
  handlePrevious, 
  handleNext 
}) {
  return (
    <div className="mid-grid">
      <div className="header">
        <p>Вопрос {currentQuestion + 1} из {animeQuizQuestions.length}</p>
      </div>
      <div className="question-section">
        <h2>{animeQuizQuestions[currentQuestion].question}</h2>
      </div>
      <div className="answers-section">
        {animeQuizQuestions[currentQuestion].options.map((option, index) => (
          <div key={index} className="answer">
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              onChange={() => handleAddUserAnswer(currentQuestion, option)}
              checked={usersAnswers[currentQuestion] === option}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <div className="buttons-section">
        <button
          className={`previous nav-buttons ${currentQuestion === 0 ? "disabled" : ""}`}
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Предыдущий
        </button>
        <button
          className={`next nav-buttons ${
            currentQuestion === animeQuizQuestions.length - 1 ? "disabled" : ""
          }`}
          onClick={handleNext}
          disabled={currentQuestion === animeQuizQuestions.length - 1}
        >
          Следующий
        </button>
      </div>
    </div>
  );
}

export default QuestionComp;
