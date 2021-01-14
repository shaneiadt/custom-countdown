import { h } from 'preact';
import Form from '../Form/Form';
import Countdown from '../Countdown/Countdown';
import './Container.css';

export default () => {
  return (
    <div className="container">
      <div className="input-container" id="input-container" hidden>
        <h1>Create a Custom Countdown</h1>
        <Form />
      </div>
      {/* <Countdown /> */}
      <div className="complete" id="complete">
        <h1 className="complete-title">Countdown Complete</h1>
        <h1 id="complete-info">TITLE Countdown Finished on 05-05-2020</h1>
        <button id="complete-button">New Countdown</button>
      </div>
    </div>
  );
};
