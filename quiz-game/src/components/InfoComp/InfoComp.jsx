import React from "react";
import "./InfoComp.css";
import TimerComp from "../../components/TimerComp/TimerComp.jsx";

function InfoComp({
  currentQuestion,
  animeQuizQuestions,
  usersAnswers,
  setCurrentQuestion,
  openModal,
  isTimerRunning,
  stopTimer
}) {
  return (
    <div className="right-grid">
      <div>
        <h3>Время</h3>
        <TimerComp isRunning={isTimerRunning} onTimeEnd={stopTimer} />
      </div>
      <div className="progress-bar"></div>
      <div className="questions-numbers-container">
        <h3>Вопросы</h3>
        <div className="questions-numbers">
          {animeQuizQuestions.map((_, index) => (
            <button
              key={index}
              className={`circle ${
                usersAnswers[index] !== null ? "answered" : ""
              } ${index === currentQuestion ? "active" : ""}`}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="end-quiz">
        <button className="nav-buttons end" onClick={openModal}>
          Закончить тест
        </button>
      </div>
    </div>
  );
}

export default InfoComp;
