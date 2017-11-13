import React from 'react';
import underscore from 'underscore';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    return (
        <ul clasName="col-md-4 list-group">
            {
                underscore.map(props.videos, (video, key) => {
                    return (
                        <VideoListItem video={video} key={key} />
                    )
                })
            }
        </ul>
    );
};

export default VideoList;
