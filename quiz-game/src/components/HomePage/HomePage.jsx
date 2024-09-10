import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

import animeImg from '../../images/anime.jpeg';
import filmImg from '../../images/film.jpg';
import scienceImg from '../../images/science.jpeg';
import sportImg from '../../images/sport.jpg';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleQuizSelection = (quizPath) => {
    navigate(quizPath);
  };

  return (
    <div className="home-page">
      <h1>Выберите тему викторины</h1>
      <div className="quiz-options">
        <div className="card" onClick={() => handleQuizSelection("/quiz/anime")}>
          <img src={animeImg} alt="Аниме" />
          <div className="overlay">
            <span className="quiz-text">Аниме</span>
          </div>
        </div>
        <div className="card" onClick={() => handleQuizSelection("/quiz/sports")}>
          <img src={sportImg} alt="Спорт" />
          <div className="overlay">
            <span className="quiz-text">Спорт</span>
          </div>
        </div>
        <div className="card" onClick={() => handleQuizSelection("/quiz/movies")}>
          <img src={filmImg} alt="Фильмы" />
          <div className="overlay">
            <span className="quiz-text">Фильмы</span>
          </div>
        </div>
        <div className="card" onClick={() => handleQuizSelection("/quiz/science")}>
          <img src={scienceImg} alt="Наука" />
          <div className="overlay">
            <span className="quiz-text">Наука</span>
          </div>
        </div>
      </div>
    </div>
  );
};
