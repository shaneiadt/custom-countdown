import { h } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import './Form.css';

export default ({ submit }: { submit: (e: Event) => void }) => {
    const [title, setTitle] = useState('');
    const datePicker = useRef<HTMLInputElement>(null);

    const updateTitle = (e: Event) => {
        const { value } = e.target as HTMLInputElement;
        setTitle(value);
    }

    useEffect(() => {
        const today = new Date().toISOString();
        datePicker.current.setAttribute('min', today.split('T')[0]);
    }, []);

    return (
        <div className="container">
            <div className="input-container" id="input-container">
                <h1>Create a Custom Countdown</h1>
                <form onSubmit={submit} className="form" id="countdownForm">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="What are you counting down to?" onInput={updateTitle} value={title} />

                    <label htmlFor="date-picker" className="date-picker">Select a Date</label>
                    <input ref={datePicker} type="date" id="date-picker" />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};