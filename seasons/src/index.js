import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // not required by react
    constructor(props) {
        super(props);
        this.state = {lat: null, errorMessage: ''};
    }

    // only called one time, immediately after the first render
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    renderContentHelper() {
        if (this.state.errorMessage && !this.state.late) 
            return <div>Error: {this.state.errorMessage}</div>
        else if (!this.state.errorMessage && this.state.lat)
            return <SeasonDisplay lat={this.state.lat}/>
        else
            return <Spinner message="Please allow location request"></Spinner>
    }

    // have to define render
    render() {
        return (
            <div>
                {this.renderContentHelper()}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));