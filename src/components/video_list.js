import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class VideoList extends React.Component {
  constructor() {
    super();
    this.selectVideo = this.selectVideo.bind(this);
  }

  selectVideo(video) {
    this.props.selectVideo(video);
  }

  render() {
    const { videos } = this.props;
    return (
      <ul className="col-md-4 list-group">
        { _.map(videos, (video, key) => {
          return (
            <li key={key} onClick={this.selectVideo.bind(this, video)} className="list-group-item">
              <div className="media-middle media-body pull-left">
                <img className="media-object" src={video.snippet.thumbnails.default.url} alt="media object" />
              </div>
              <div className="media-body">
                <h5 className="media-heading videoTitle"><strong>{video.snippet.title}</strong></h5>
                <p className="channelTitle">{video.snippet.channelTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

VideoList.defaultProps = {
  videos: [],
  selectVideo: undefined,
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
  selectVideo: PropTypes.func,
};

export default VideoList;
