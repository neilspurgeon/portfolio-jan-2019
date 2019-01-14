import React from 'react';
import styles from './style.css';

const ProjectHeroVideo = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.videoCrop}>
        <video
          className={styles.video}
          src={props.src}
          autoplay="true"
          loop
          muted
          preload
          playsinline
        />
      </div>
    </div>
  );
};

export default ProjectHeroVideo;
