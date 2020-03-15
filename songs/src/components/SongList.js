import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSongActionCreator } from '../actions/actions';

class SongList extends Component {

    renderList() {
        return this.props.listOfSongs.map((song) => {
            return (
                <div className="item" key={ song.title }>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={ () => this.props.selectSongAction(song) }
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{ song.title }</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui divided list">{ this.renderList() }</div>
        );
    }
}

/*
 * the object returned by this method will be the props of the SongList component
 * this.props === { listOfSongs: state.songs }
 * 
 * the state object parameter will have all of the data inside of the redux store
 * 
 * Everytime we click on the select button, this function will rerun which then
 * makes the component rerender
 */
const mapStateToProps = state => {
    // state has selectedSong and songs, but the SongList component only needs songs
    return { listOfSongs: state.songs };
};

/*
 * any time the list of songs in the redux store changes, the provider is going to
 * automatically notify this connect function. This connect function is then going
 * to pass the list of songs to the SongList component
 * 
 * the connect function is not only used to get data out of our store for mapStateToProps,
 * but also to get action creators properly in the components
 */
export default connect(
    mapStateToProps, {
    selectSongAction: selectSongActionCreator
}
)(SongList);
