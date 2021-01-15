import { h, Fragment } from 'preact';
import Form from '../Form/Form';
import Countdown from '../Countdown/Countdown';
import Complete from '../Complete/Complete';
import './Container.css';

export default () => {
  return (
    <Fragment>
      <Form />
      {/* <Countdown show={true} />
      <Complete show={false} /> */}
    </Fragment>
  );
};
