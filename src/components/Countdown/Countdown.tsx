import { h } from 'preact';
import './Countdown.css';

export default ({ title, date, done, reset }: { title: string, date: string, done: () => void, reset: () => void }) => {

  const countDownValue = new Date(date).getTime();
  console.log(countDownValue);

  return (
    <div className="container">
      <div className="countdown" id="countdown">
        <h1 id="countdown-title">{title}</h1>
        <ul>
          <li><span>3</span>Days</li>
          <li><span>6</span>Hours</li>
          <li><span>45</span>Minutes</li>
          <li><span>23</span>Seconds</li>
        </ul>
        <button id="countdown-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
