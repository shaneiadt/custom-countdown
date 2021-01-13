import { h, Fragment } from 'preact';
import './Background.css';

export default ({ video = '' }: { video?: string }) => {
  return (
    <Fragment>
      {video.length > 1 &&
        <div>
          <video className="video-background" loop muted autoPlay>
            <source src={video}></source>
          </video>
          <div className="video-overlay"></div>
        </div>
      }
    </Fragment>
  );
};
