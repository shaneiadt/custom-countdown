import { h, Fragment } from 'preact';
import './Background.css';

export default () => {
    return(
      <Fragment>
        <video class="video-background" loop muted autoPlay>
          <source src="/time.mp4"></source>
        </video>
        <div className="video-overlay"></div>
      </Fragment>
    );
};
