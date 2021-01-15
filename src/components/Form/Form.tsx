import { h } from 'preact';
import './Form.css';

export default () => {
    function submit(e: Event) {
        e.preventDefault();
        console.log('FORM SUBMITTED');
    }
    return (
        <div className="container">
            <div className="input-container" id="input-container">
                <h1>Create a Custom Countdown</h1>
                <form onSubmit={submit} className="form" id="countdownForm">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="What are you counting down to?" />

                    <label htmlFor="date-picker" className="date-picker">Select a Date</label>
                    <input type="date" id="date-picker" />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};