import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = (props) => {
  const { videos } = props;
  if (!videos) {
    return <div>Loading...</div>;
  }
  const { videoId } = videos.id;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="video detail" src={url} className="embed-responsive-item" />
      </div>
      <div className="details">
        <h4><strong>{videos.snippet.title}</strong></h4>
      </div>
    </div>
  );
};

VideoDetail.defaultProps = {
  videos: [],
};

VideoDetail.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
};

export default VideoDetail;
