import React, { useEffect, useState } from "react";

const TimerFifteen = () => {
  const [seconds, setSeconds] = useState(15);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <h1>Countdown Timer</h1>
      <h2>{seconds}</h2>
    </div>
  );
};

export default TimerFifteen;
