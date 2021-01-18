import { h } from 'preact';
import './Countdown.css';

export default ({ title, date, done, reset }: { title: string, date: string, done: () => void, reset: () => void }) => {

  const countDownValue = new Date(date).getTime();
  const distance = countDownValue - new Date().getTime();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  return (
    <div className="container">
      <div className="countdown" id="countdown">
        <h1 id="countdown-title">{title}</h1>
        <ul>
          <li><span>{days}</span>Days</li>
          <li><span>{hours}</span>Hours</li>
          <li><span>{minutes}</span>Minutes</li>
          <li><span>{seconds}</span>Seconds</li>
        </ul>
        <button id="countdown-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
