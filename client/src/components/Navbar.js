import Auth from '@aws-amplify/auth';
import React, { Component } from 'react'
import  './Navbar.css';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';



export default class Navbar extends Component {

    handleLogOut = async event => {
        // this.props.history.push("/");
        event.preventDefault();
        
        try { 
            await Auth.signOut();
            this.props.auth.setAuthStatus(false);
            this.props.auth.setUser(null);
            
            
        } catch (error) {
            console.log(error.message);
        }
        window.location.reload();
    }
    render() {
        return (
            !this.props.isAuthenticated && <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/" exact style={{textDecoration:'none'}}>
                        {/* Replace this part with the logo of the company */}
                        NeverLate
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        
                        <div className="buttons">
                            {!this.props.auth.isAuthenticated && (
                                <div>
                                    <Link to="/signup" className="button is-link">
                                        <strong>Sign Up</strong>
                                    </Link>
                                    <Link to="/login" className="button is-light">
                                        Log In
                                    </Link>
                                </div>
                            )}
                            {this.props.auth.isAuthenticated && this.props.auth.user && (
                                <Link className="button is-light" to="/dashboard">
                                    Welcome {this.props.auth.user.username}
                                </Link>
                            )}
                            {this.props.auth.isAuthenticated && (
                                <Link to="/" onClick={this.handleLogOut} className="button is-light">
                                    Log out
                                </Link>
                            )}
                            {this.props.auth.isAuthenticated && (
                                <Link to="/profile"  className="button is-light">
                                    <MenuIcon />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
