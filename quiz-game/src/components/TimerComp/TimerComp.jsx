import React, { useState, useEffect } from "react";

const TimerComp = ({ onTimeEnd, isRunning }) => {
  const initialTime = 300;
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (isRunning && time > 0) {
      const timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (time === 0) {
      if (onTimeEnd) {
        onTimeEnd();
      }
    }
  }, [isRunning, time, onTimeEnd]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <h4>{formatTime(time)}</h4>
    </div>
  );
};

export default TimerComp;
