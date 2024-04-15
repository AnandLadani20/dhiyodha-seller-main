import { useEffect, useState } from "react";
import useCountDown from "react-countdown-hook";

const Timer = ({ second, mutate = () => {} }) => {
  const [started, setStarted] = useState(false);
  const getSecondToUpdate = (sec) => {
    if (sec > 86400) {
      return 600000;
    } else if (sec > 7600) {
      return 60000;
    } else {
      return 1000;
    }
  };
  const [timeLeft, { start }] = useCountDown(second * 1000, getSecondToUpdate(second));

  useEffect(() => {
    if (started && timeLeft === 0) {
      mutate();
    }
  }, [mutate, timeLeft, started]);

  useEffect(() => {
    if (!started) {
      start();
      setStarted(true);
    }
  }, [start, second, started]);

  const minutesToTime = (totalSeconds) => {
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const hours = Math.floor(totalSeconds / 3600);
    const days = Math.floor(totalSeconds / 86400);
    if (totalSeconds > 86400) {
      return `${days} days`;
    } else if (totalSeconds < 86400 && totalSeconds >= 3600) {
      return `${hours}h ${minutes}m`;
    } else if (totalSeconds < 3600 && totalSeconds >= 60) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  return <>{minutesToTime(timeLeft / 1000)}</>;
};
export default Timer;
