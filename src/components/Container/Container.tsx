import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Form from '../Form/Form';
import Countdown from '../Countdown/Countdown';
import Complete from '../Complete/Complete';
import './Container.css';

export default () => {
  const [container, setContainer] = useState({ title: '', date: '' });
  const [finished, setFinished] = useState(false);

  const submit = (e: Event) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const title = (target[0] as HTMLInputElement).value;
    const date = (target[1] as HTMLDataElement).value;

    if (title.length <= 1 || isNaN(new Date(date).getTime())) {
      alert('Enter a title & select a date to start the countdown');
      return;
    };

    setContainer({
      title,
      date
    });

    localStorage.setItem('countdown', JSON.stringify({ title, date }));
  }

  const reset = () => {
    localStorage.removeItem('countdown');
    setContainer({ title: '', date: '' });
    setFinished(false);
  }

  const done = () => {
    localStorage.removeItem('countdown');
    setFinished(true);
  }

  useEffect(() => {
    const localStoreItem = localStorage.getItem('countdown');

    if (localStoreItem) {
      const json = JSON.parse(localStoreItem);
      setContainer(json);
    }
  }, []);

  return (
    <Fragment>
      {!finished && container.title === '' || container.date === '' ? <Form submit={submit} /> : null}
      {!finished && container.title.length > 1 && container.date.length > 1 ? <Countdown title={container.title} date={container.date} done={done} reset={reset} /> : null}
      {finished ? <Complete title={container.title} date={container.date} reset={reset} /> : null}
    </Fragment>
  );
};
