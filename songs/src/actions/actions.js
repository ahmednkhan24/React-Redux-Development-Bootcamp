// action creator
export const selectSongActionCreator = song => {

    // return an action
    return {
        type: 'SELECTED_SONG',
        payload: song
    };
};

// anytime we want to update our data in redux we need to call an action creator

/*
 * This action creator will attempt to select a song. When called and given a song, it 
 * will return action with type SELECTED_SONG and a payload of song.
 * 
 * This action will then end up in our selected song reducer.
 * 
 * If the selected song is updated in the redux store via the song reducer, 
 * the component connecting to it (SongList) will update it's props by 
 * calling mapStateToProps and then re-rendering the component
 * 
 */
