import "./App.css";

import { Route, Routes } from "react-router-dom";
import { QuizPage } from "./components/QuizPage/QuizPage.jsx";
import { HomePage } from "./components/HomePage/HomePage.jsx";
import { StatisticsPage } from "./components/StatisticsPage/StatisticsPage.jsx";
import { QuizProvider } from "../src/components/QuizContext";

function App() {
  return (
    <div className="wrap">
      <QuizProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:topic" element={<QuizPage />} />
          <Route path="/statistic" element={<StatisticsPage />}></Route>
        </Routes>
      </QuizProvider>
    </div>
  );
}

export default App;
