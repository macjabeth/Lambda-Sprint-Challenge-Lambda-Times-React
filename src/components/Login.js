import React, { PureComponent } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends PureComponent {
  state = {
    userInput: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.completeLogin(this.state.userInput);
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" onChange={this.handleChange} required></Input>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" required></Input>
        </FormGroup>
        <Button>Login</Button>
      </Form>
    )
  }
}

export default Login;
