import React, {Component} from 'react'
import './Navbar.css'



class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="nav">
                    <a href="/" className="active">FlightType</a>
                    <div id="myLinks">
                        <a href="/login" className="navLink">Login</a>
                        <a href="/signup" className="navLink">Signup</a>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;