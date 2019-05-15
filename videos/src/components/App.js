/*
 * We will make the app a class based component
 * because it will hold all of the different
 * states for our application components
 */

// import libraries
import React from 'react';

// import created components
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {

    /*
     * callback function go be given as a prop to 
     * the SearchBar component to call whenever the form
     * submits in order to search for the YouTube videos
     */
    onTermSubmit = (term) => {
       youtube.get('/search', {
           params: {
               q: term
           }
       })
       .then(response => console.log(response))
       .catch(err => { console.log(err) });
    };

    /*
     * have to define render method for all components
     * can only return 1 object, so all objects must be
     * wrapped in a div
     */
    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;
