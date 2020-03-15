import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
    render() {
        const { user } = this.props;

        if (!user) {
            return null;
        }

        return (
            <div className="header">{ user.name }</div>
        );
    }
};

/*
 * mapStateToProps gets called with...
 * state - all of the state within the redux store
 * ownProps - all of the props that are about to be sent into the component
 */
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
