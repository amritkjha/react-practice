import Icon from './PlayIcon';
import React, { useEffect, useRef, useState } from 'react';

import styles from './Countdown.module.css';

const Countdown = () => {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(() => {
    let timer;
    if (active) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : prev));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [active]);
  useEffect(() => {
    setTimeLeft(time);
  }, [time]);
  const handleStartStop = () => {
    if (active === false) setTimeLeft(time);
    setActive(true);
  };
  let hours = Math.floor(timeLeft / 3600);
  let minutes = Math.floor((timeLeft % 3600) / 60);
  let seconds = Math.floor((timeLeft % 3600) % 60);
  return (
    <div className={styles.mainDiv}>
      <label>Enter Minutes</label>
      <input
        value={time / 60}
        onChange={(e) => setTime(Number(e.target.value) * 60)}
      />
      <div className={styles.timeDiv}>
        <div className={styles.button} onClick={handleStartStop}>
          <Icon />
        </div>
        <span>
          {hours < 10 ? '0' + hours : hours}:
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </span>
      </div>
    </div>
  );
};

export default Countdown;
