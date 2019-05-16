/*
 * This will represent one video item, 
 * but there is no state that needs to be tracked, 
 * therefore it can be made into functional component
 */
import './VideoItem.css';
import React from 'react';

const VideoItem = (props) => {
    return (
        <div className="video-item item" onClick={ () => props.onVideoSelect(props.video) }>

            <img 
                className="ui image" 
                alt={ props.video.snippet.title } 
                src={ props.video.snippet.thumbnails.medium.url } 
            />

            <div className="content">
                <div className="header">
                    { props.video.snippet.title }
                </div>
            </div>

        </div>    
    );
};

export default VideoItem;
