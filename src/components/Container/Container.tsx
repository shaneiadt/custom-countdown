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
    console.log('SUBMITTED IT!');
    setView(<Countdown />);
  }

  return (
    <Fragment>
      {view}
    </Fragment>
  );
};
