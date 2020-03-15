import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Song 1', duration: '4:20' },
        { title: 'Song 2', duration: '1:59' },
        { title: 'Song 3', duration: '3:37' },
        { title: 'Song 4', duration: '6:03' }
    ];
};

// default to null 
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECTED_SONG') {
        return action.payload;
    }
    return selectedSong;
};

// the keys of this object will be the keys that show up inside of the state object
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
