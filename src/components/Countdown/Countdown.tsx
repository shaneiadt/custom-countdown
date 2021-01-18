import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import './Countdown.css';

export default ({ title, date, done, reset }: { title: string, date: string, done: () => void, reset: () => void }) => {

  const countDownValue = new Date(date).getTime();
  const [display, setDisplay] = useState(false);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      let distance = countDownValue - new Date().getTime();

      if (distance < 0) done();

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(distance / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor((distance % hour) / minute);
      const seconds = Math.floor((distance % minute) / second);

      setTime({
        days,
        hours,
        minutes,
        seconds
      });

      if (!display) setDisplay(true);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (display ?
    <div className="container">
      <div className="countdown" id="countdown">
        <h1 id="countdown-title">{title}</h1>
        <ul>
          <li><span>{time.days}</span>Days</li>
          <li><span>{time.hours}</span>Hours</li>
          <li><span>{time.minutes}</span>Minutes</li>
          <li><span>{time.seconds}</span>Seconds</li>
        </ul>
        <button id="countdown-button" onClick={reset}>Reset</button>
      </div>
    </div> : null
  );
};
