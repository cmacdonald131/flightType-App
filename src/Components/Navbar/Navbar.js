import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import TokenService from '../../Services/token-service'
import { Link } from 'react-router-dom'
import './Navbar.css'



class Navbar extends Component {
    static contextType = ApiContext

    logout = () => {
        this.context.setUser(null)
        TokenService.clearAuthToken()
    }

    //when successfully logged in the navbar will display a link for the team page and log out.  When logged out it will show links for login and register

    render() {
        let menus
        if (this.context.user) {
            menus = (
                <div id="myLinks">
                    <Link to="/user" className="navLink">Home Page</Link>
                    <Link to='/' onClick={this.logout} className="navLink">Logout</Link>
                </div>
            )
        }

        else {
            menus = (
                <div id="myLinks">
                    <Link to="/login" className="navLink">Login</Link>
                    <Link to="/signup" className="navLink">Register</Link>
                </div>
            )
        }

        return (
            <div className="Navbar">
                <nav className="nav">
                    <a href="/" className="active">FlightType</a>
                    {menus}
                </nav>
            </div>
        );
    }
}
export default Navbar;