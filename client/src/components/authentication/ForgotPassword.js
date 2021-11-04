import React, { Component } from 'react'
import FormErrors from "../../utility/FormErrors"
import Validate from "../../utility/FormValidation"
import { Auth } from 'aws-amplify'

export default class ForgotPassword extends Component {
  state = {
    username: "",
    email: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  }

  forgotPasswordHandler = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    try{
      console.log(this.state.email);
      await Auth.forgotPassword(this.state.username);
      this.props.history.push('/ForgotPasswordVerification');
    }catch (e) {
      console.log(e);
    }
  }

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    return (
      <section className="section auth mt-3">
        <div className="container">
          <h1>Forgot your password?</h1>
          <p>
            Please enter the email address associated with your account and we'll
            email you a password reset link.
          </p>
          <FormErrors formerrors={this.state.errors} />



          <form onSubmit={this.forgotPasswordHandler}>
            <div className="field">


              <p className="control has-icons-left has-icons-right">
            <input
                className="input"
                type="text"
                id="username"
                aria-describedby="usernameHelp"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.onInputChange}
            />
              </p>
            </div>
            <div className="field">


              <p className="control has-icons-left has-icons-right">

                <input
                  type="email"
                  className="input"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <a href="/forgotpassword">Forgot password?</a>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-link">
                  Submit
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
};