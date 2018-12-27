import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class NewUserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: ''
        };
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit({ firstName: this.state.firstName, lastName: this.state.lastName });
        this.setState({ firstName: '', lastName: '' });
    };

    handleFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
    };

    handleLastNameChange = e => {
        this.setState({ lastName: e.target.value });
    };
    
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>First name</Label>
                    <Input placeholder='First name' onChange={this.handleFirstNameChange} value={this.state.firstName} />
                </FormGroup>
                <FormGroup>
                    <Label>Last name</Label>
                    <Input placeholder='Last name' onChange={this.handleLastNameChange} value={this.state.lastName} />
                </FormGroup>
                <FormGroup>
                    <Button block outline type='submit' color='primary'>
                        Create
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default NewUserForm;