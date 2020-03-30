import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './Landing.css'



export default class Landing extends Component {
    render() {
        return (
            <div className="Landing">
                <Navbar />

                <div className="LandingSection">
                    
                    <section className="Card">
                        <header>
                            <h1 className="header">Why FlightType?</h1>
                        </header>
                        <img src={require("../../Images/challenger.jpg")} alt="plane landing" className="images"></img>
                        <p>As a FlightType user you will be able to upload your favorite photos, set alerts for your frequently tracked aircraft, and have access to more in depth aircraft information.</p>
                        <p>FlightType was designed to help you answer all of your questions from when a flight arrives, to what type of fuel an aircraft uses.  We want to provide you with the very best experience possible.</p>
                        <img src={require("../../Images/gulfstream.jpg")} alt="gulfstream" className="images"></img>
                    </section>

                    <div style={{textAlign: "center"}}>Interested?  <Link to="/signup">Sign up here.</Link>  It will only take a second.</div>
                </div>
            </div>
        );
    }
}

