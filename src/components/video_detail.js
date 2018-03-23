import React from 'react';

const VideoDetail = (props) => {
    let videoDetail = props.videos;
    if(videoDetail && videoDetail.length) {
        let videoID = videoDetail.id.videoID;
        const url = `https://www.youtube.com/embed/${videoID}`;
    }
    return (
        <div clasName="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div>{  ''}</div>
                <div>{ ''}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
