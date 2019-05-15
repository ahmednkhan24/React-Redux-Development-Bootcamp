// import libraries
import React from 'react';
import ReactDOM from 'react-dom';

// import created components
import App from './components/App';

/*
 * render the App component and insert it in the index.html file
 * within a dom element with the ID of 'root'
 */
ReactDOM.render(<App/>, document.querySelector('#root'));
