import { h } from 'preact';
import { useState } from 'preact/hooks';
import './Form.css';

export default ({ submit }: { submit: (e: Event) => void }) => {
    const [title, setTitle] = useState('');

    const updateTitle = (e: Event) => {
        const { value } = e.target as HTMLInputElement;
        setTitle(value);
    }
    
    const updateDate = (e: Event) => {
        console.log(e);
    }

    return (
        <div className="container">
            <div className="input-container" id="input-container">
                <h1>Create a Custom Countdown</h1>
                <form onSubmit={submit} className="form" id="countdownForm">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="What are you counting down to?" onInput={updateTitle} value={title} />

                    <label htmlFor="date-picker" className="date-picker">Select a Date</label>
                    <input type="date" id="date-picker" onChange={updateDate} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};