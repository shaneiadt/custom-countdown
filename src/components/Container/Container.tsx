import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import Form from '../Form/Form';
import Countdown from '../Countdown/Countdown';
import Complete from '../Complete/Complete';
import './Container.css';

export default () => {
  const [view, setView] = useState(<Form submit={submit} />);

  function submit(e: Event) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const title = (target[0] as HTMLInputElement).value;
    const date = (target[1] as HTMLDataElement).value;

    setView(<Countdown title={title} date={date} done={done} />);
  }

  function done() {
    console.log('DONE');
    setView(<Complete />);
  }

  return (
    <Fragment>
      {view}
    </Fragment>
  );
};
