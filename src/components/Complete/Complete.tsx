import { h } from 'preact';
import './Complete.css';

export default () => {
  return (
    <div className="container">
      <div className="complete" id="complete">
        <h1 className="complete-title">Countdown Complete</h1>
        <h1 id="complete-info">TITLE Countdown Finished on 05-05-2020</h1>
        <button id="complete-button">New Countdown</button>
      </div>
    </div>
  );
};
