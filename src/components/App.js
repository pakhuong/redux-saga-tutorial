import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createUserRequest, getUsersRequest } from '../actions/users';
import NewUserForm from './NewUserForm';
import UsersList from './UsersList';

class App extends Component {
    constructor(props) {
        super(props);

        this.props.getUsersRequest();
    }

    handleSubmit = ({ firstName, lastName }) => {
        this.props.createUserRequest({ firstName, lastName });
    };

    render() {
        const { users } = this.props;

        return (
            <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
                <NewUserForm onSubmit={this.handleSubmit} />
                <UsersList users={users.items} />
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = dispatch => bindActionCreators({ createUserRequest, getUsersRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
