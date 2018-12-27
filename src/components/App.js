import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createUserRequest, deleteUserRequest, getUsersRequest } from '../actions/users';
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

    handleDeleteUserClick = userId => {
        this.props.deleteUserRequest(userId);
    };

    render() {
        const { users } = this.props;

        return (
            <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
                <NewUserForm onSubmit={this.handleSubmit} />
                <UsersList onDeleteUser={this.handleDeleteUserClick} users={users.items} />
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        createUserRequest,
        deleteUserRequest,
        getUsersRequest 
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
