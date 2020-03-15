import React from 'react';
import { connect } from 'react-redux';


const SongDetail = props => {
    if (!props.currentlySelectedSong) {
        return <div><h3>Select a Song</h3></div>
    }
    return (
        <div>
            <h3>Details for: </h3>
            <p>Title: { props.currentlySelectedSong.title }</p>
            <p>Duration: { props.currentlySelectedSong.duration }</p>
        </div>
    );
};

// the keys in our state object are the keys specified in the combineReducers from reducers.js
const mapStateToProps = state => {
    return { currentlySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
