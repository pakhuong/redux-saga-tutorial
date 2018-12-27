import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { bindActionCreators } from 'redux';

import { createUserRequest, deleteUserRequest, getUsersRequest, usersError } from '../actions/users';
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

    handleCloseAlert = () => {
        this.props.usersError({ error: '' });
    };

    render() {
        const { users } = this.props;

        return (
            <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
                <Alert color='danger' isOpen={!!users.error} toggle={this.handleCloseAlert}>
                    {users.error}
                </Alert>
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
        getUsersRequest,
        usersError
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
