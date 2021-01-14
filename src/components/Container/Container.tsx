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
      <Countdown />
    </div>
  );
};
