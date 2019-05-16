/*
 * We will make the app a class based component
 * because it will hold all of the different
 * states for our application components
 */

// import libraries
import React from 'react';

// import created components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import youtube from '../apis/youtube';

class App extends React.Component {

    /*
     * class constructor
     */
    constructor(props) {
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null 
        };
    }

    /*
     * only called one time, immediately after the first render
     *
     * function will attempt to make some default search
     * when the component is first rendered to the screen
     */
    componentDidMount() {
        this.onTermSubmit('React js');
    }

    /*
     * callback function to be given as a prop to 
     * the SearchBar component to call whenever the form
     * submits in order to search for the YouTube videos
     * 
     * Since the GET request to fetch the datas is asynchronous,
     * we will use JS's async await syntax to handle the promise
     */
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[0] 
        });
    };

    /*
     * callback function to be given as a prop to 
     * the VideoList that will then be passed down as a prop
     * to each VideoItem to call whenever the user clicks
     * a VideoItem from the VideoList in order to update
     * what the currently selected video is to showcase 
     */
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    /*
     * have to define render method for all components
     * can only return 1 object, so all objects must be
     * wrapped in a div
     */
    render(){
        return (
            <div className="ui container">

                <SearchBar onFormSubmit={ this.onTermSubmit }/>

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                    
                            <VideoDetail video={ this.state.selectedVideo }/>

                        </div>
                        <div className="five wide column">

                            <VideoList
                                videos={ this.state.videos }
                                onVideoSelect={ this.onVideoSelect }
                            />
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
