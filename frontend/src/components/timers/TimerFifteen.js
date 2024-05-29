import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

const TimerFifteen = forwardRef((props, ref) => {
  const [time, setTime] = useState(15);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  useImperativeHandle(ref, () => ({
    start() {
      setIsActive(true);
    },
    pause() {
      setIsActive(false);
    },
    reset() {
      setTime(15);
      setIsActive(false);
    },
  }));

  return (
    <div>
      <div>{time}s</div>
    </div>
  );
});

export default TimerFifteen;
