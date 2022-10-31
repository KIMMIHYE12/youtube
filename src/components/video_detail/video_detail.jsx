import styles from './video_detail.module.css'
import React from 'react';

const VideoDetail = ({video, video: {snippet}}) => (
      <section calssName={styles.detail}>
        <iframe 
          className={styles.video} 
          type="text/html" 
          title="Youtube video player"
          width="100%" 
          height="500px"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0" 
          allowFullScreen
        ></iframe>
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre className={styles.description}>{snippet.description}</pre>
      </section>
  );

export default VideoDetail;