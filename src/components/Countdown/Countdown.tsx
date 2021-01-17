import { h } from 'preact';
import './Countdown.css';

export default ({ title, date, done }: { title: string, date: string, done: () => void }) => {
  console.log({ title, date });
  return (
    <div className="container">
      <div className="countdown" id="countdown">
        <h1 id="countdown-title">Countdown Title Here</h1>
        <ul>
          <li><span>3</span>Days</li>
          <li><span>6</span>Hours</li>
          <li><span>45</span>Minutes</li>
          <li><span>23</span>Seconds</li>
        </ul>
        <button id="countdown-button">Reset</button>
      </div>
    </div>
  );
};
