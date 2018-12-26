import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUsersRequest } from '../actions/users';
import UsersList from './UsersList';

class App extends Component {
    constructor(props) {
        super(props);

        this.props.getUsersRequest();
    }

    render() {
        const { users } = this.props;

        return (
            <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
                <UsersList users={users.items} />
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = dispatch => bindActionCreators({ getUsersRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
