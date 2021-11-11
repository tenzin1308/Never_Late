import React, { Component } from 'react'
// import { library } from '~@fortawesome/fontawesome-svg-core';
// import { faEdit } from '~@fortawesome/free-solid-svg-icons';
import Auth from '@aws-amplify/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import ForgotPassword from './components/authentication/ForgotPassword';
import ForgotPasswordVerification from './components/authentication/ForgotPasswordVerification';
import ChangePassword from './components/authentication/ChangePassword';
import ChangePasswordConfirmation from './components/authentication/ChangePasswordConfirmation';




export default class App extends Component {

  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    session: this.props.ss,
    user: null,
    uniqueID: this.props.ss
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated })
  }

  setUser = user => {
    this.setState({ user: user });
    this.setState({ uniqueID: user.userDataKey.slice(31, 57) });
  }

  setSession = newSession =>{
    this.setState({ session:newSession });
  }

  async componentDidMount(){
    try{
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);

      const user = await Auth.currentAuthenticatedUser();
      console.log(user.userDataKey.slice(31,57))
      this.setUser(user);
      console.log(this.state);
    }catch (e) {
      console.log(e);
    }
    this.setState({isAuthenticating: false});


  }

  render() {

    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser,
      mySession: this.state.session,
      uniqueID: this.state.uniqueID
    }

    return (
      !this.state.isAuthenticating &&
      <div className="App">
        <Router>
          <div>
            <Navbar auth={authProps} />
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} />
              <Route exact path="/signup" render={(props) => <Signup {...props} auth={authProps} />} />
              <Route exact path="/login" render={(props) => <Login {...props} auth={authProps} />} />
              <Route exact path="/dashboard" render={(props) => <Dashboard {...props} auth={authProps} />} />
              <Route exact path="/welcome" render={(props) => <Welcome {...props} auth={authProps} />} />
              <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} />} />
              <Route exact path="/forgotpasswordverification" render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />} />
              <Route exact path="/changepassword" render={(props) => <ChangePassword {...props} auth={authProps} />} />
              <Route exact path="/changepasswordconfirm" render={(props) => <ChangePasswordConfirmation {...props} auth={authProps} />} />
              <Route exact path="/profile" render={(props) => <Profile {...props} auth={authProps} />} />
            </Switch>
            <Footer/>
          </div>
        </Router>
      </div>
    )
  }
}
