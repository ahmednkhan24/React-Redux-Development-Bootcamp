/*
 * This will hold the big display of the currently selected video, 
 * but there is no state that needs to be tracked, 
 * therefore it can be made into functional component
 */

import React from 'react';

const VideoDetail = (props) => {

    // if there is not any currently selected video, give a loading message
    if (!props.video) {
        return (
            <div>Loading...</div>
        );
    }

    const videoSrcLink = `https://www.youtube.com/embed/${ props.video.id.videoId }`
    
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={ videoSrcLink }/>
            </div>

            <div className="ui segment">
                <h4 className="ui header">{ props.video.snippet.title }</h4>
                <p>{ props.video.snippet.description }</p>
            </div>
        </div>
    );
};

export default VideoDetail;
