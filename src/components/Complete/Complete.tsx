import { h } from 'preact';
import './Complete.css';

export default ({ title, date, reset }: { title: string, date: string, reset: () => void }) => {
  return (
    <div className="container">
      <div className="complete" id="complete">
        <h1 className="complete-title">Countdown Complete</h1>
        <h1 id="complete-info">{title} Countdown Finished on {date}</h1>
        <button id="complete-button" onClick={reset}>New Countdown</button>
      </div>
    </div>
  );
};
