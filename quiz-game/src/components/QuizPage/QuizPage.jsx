import React, { useState, useContext } from "react";
import { QuizContext } from "../QuizContext.js";

import { Link, useParams } from "react-router-dom";
import "./QuizPage.css";
import {
  animeQuizQuestions,
  sportsQuizQuestions,
  moviesQuizQuestions,
  scienceQuizQuestions,
} from "../../components/questions.js";
import QuestionComp from "../../components/QuestionComp/QuestionComp.jsx";
import InfoComp from "../../components/InfoComp/InfoComp.jsx";

export const QuizPage = () => {
  const { topic } = useParams();

  let selectedQuestions;
  switch (topic) {
    case "anime":
      selectedQuestions = animeQuizQuestions;
      break;
    case "sports":
      selectedQuestions = sportsQuizQuestions;
      break;
    case "movies":
      selectedQuestions = moviesQuizQuestions;
      break;
    case "science":
      selectedQuestions = scienceQuizQuestions;
      break;
    default:
      selectedQuestions = [];
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [usersAnswers, setUserAnswers] = useState(
    new Array(selectedQuestions.length).fill(null)
  );
  const [isOpen, setIsOpen] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const [userCorrectAnswer, setUserCorrectAnswer] = useState();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const { setQuizData } = useContext(QuizContext);


  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleAddUserAnswer = (questionIndex, selectedOption) => {
    const updatedAnswers = [...usersAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
    console.log(updatedAnswers);
  };

  const calculateScore = () => {
    return usersAnswers.reduce((score, answer, index) => {
      if (answer === selectedQuestions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const getScoreMessage = (score) => {
    const totalQuestions = selectedQuestions.length;
    const percentage = (score / totalQuestions) * 100;

    if (percentage === 100) {
      return "Превосходно! Вы ответили правильно на все вопросы!";
    } else if (percentage >= 80) {
      return "Отлично! Вы ответили правильно на большинство вопросов!";
    } else if (percentage >= 50) {
      return "Хорошо! Но есть к чему стремиться.";
    } else {
      return "Вы можете лучше! Попробуйте еще раз.";
    }
  };

  const score = calculateScore();

  const handleFinishQuiz = () => {
    setQuizData({selectedQuestions, usersAnswers})
    setShowStats(true);
    setIsTimerRunning(false);
    closeModal();

  };

  const stopTimer = () => setIsTimerRunning(false);

  return (
    <div className="wrapper">
      <div></div>
      <QuestionComp
        currentQuestion={currentQuestion}
        animeQuizQuestions={selectedQuestions}
        usersAnswers={usersAnswers}
        handleAddUserAnswer={handleAddUserAnswer}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      <InfoComp
        currentQuestion={currentQuestion}
        animeQuizQuestions={selectedQuestions}
        usersAnswers={usersAnswers}
        setCurrentQuestion={setCurrentQuestion}
        openModal={openModal}
        isTimerRunning={isTimerRunning}
        stopTimer={stopTimer}
      />
      {isOpen && !showStats && (
        <div className="modal">
          <div className="modal-content">
            <span>Вы уверены что хотите закончить тест?</span>
            <div className="modal-buttons">
              <button
                className="nav-buttons yes-btn"
                onClick={handleFinishQuiz}
              >
                Да, уверен
              </button>
              <button className="nav-buttons no-btn" onClick={closeModal}>
                Нет, продолжаем
              </button>
            </div>
          </div>
        </div>
      )}

      {showStats && (
        <div className="modal">
          <div className="modal-content">
            <h2>Правильных ответов:</h2>
            <p>
              {calculateScore()} из {selectedQuestions.length}
            </p>
            <p>{getScoreMessage(score)}</p>

            <div className="modal-buttons">
              <Link to={"/"}>
                <button className="nav-buttons">На главную</button>
              </Link>
              <Link to={"/statistic"}>
                <button className="nav-buttons check-results">
                  Статистика
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
