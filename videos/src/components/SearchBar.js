// import libraries
import React from 'react';

class SearchBar extends React.Component {

    /*
     * class constructor
     */
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    /*
     * callback function to be called whenever the 
     * text inside of the input field changes
     */
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    /*
     * callback function to be called whenever the 
     * form is submitted
     */
    onFormSubmit = (event) => {
        // prevent the form from auto-refreshing whenever it submits
        event.preventDefault();
        // call search callback from parent component
        this.props.onFormSubmit(this.state.term);
    };

    /*
     * have to define render method for all components
     * can only return 1 object, so all objects must be
     * wrapped in a div
     */
    render(){
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
