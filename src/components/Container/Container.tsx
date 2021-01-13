import { h } from 'preact';
import './Container.css';

export default () => {
  return (
    <div className="container">
      <div className="input-container" id="input-container">
        <h1>Create a Custom Countdown</h1>
        <form action="" className="form" id="countdownForm">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="What are you counting down to?"/>

          <label htmlFor="date-picker" className="date-picker">Select a Date</label>
          <input type="date" id="date-picker"/>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
