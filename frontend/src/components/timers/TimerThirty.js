import React, { useEffect, useState } from "react";

const TimerThirty = () => {
  const [seconds, setSeconds] = useState(30);
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
      <h1>Countdown Timer (30 Seconds)</h1>
      <h2>{seconds}</h2>
    </div>
  );
};

export default TimerThirty;
