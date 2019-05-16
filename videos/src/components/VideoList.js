/*
 * This will hold all of the different video items, 
 * but there is no state that needs to be tracked, 
 * therefore it can be made into functional component
 */

import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

    /*
     * Loop over the array of video data within the props parameter
     * and create a new array of of VideoItems to render to the screen 
     */
    const renderedList = props.videos.map( (video) => {
        return (
            <VideoItem
                key={ video.id.videoId }
                video={ video } 
                onVideoSelect={ props.onVideoSelect }
            />
        );
    });

    return (
        <div className="ui relaxed divided list">
            { renderedList }
        </div>
    );
};

export default VideoList;
