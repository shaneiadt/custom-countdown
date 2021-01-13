import { h } from 'preact';
import Form from '../Form/Form';
import './Container.css';

export default () => {
  return (
    <div className="container">
      <div className="input-container" id="input-container">
        <h1>Create a Custom Countdown</h1>
        <Form />
      </div>
    </div>
  );
};
