import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import Aircraft from '../Aircraft/Aircraft'

export default class SearchSection extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <header role="banner">
                    <h1 style={{ textAlign: "center" }}>FlightType</h1>
                    <h2 style={{ textAlign: "center" }}>We're the landing spot for your aircraft information</h2>
                </header>
                <SearchBar />
                <Aircraft />

                <div style={{textAlign: "center"}}>Why FlightType?  <Link to="/about">Check it out here.</Link> </div>

            </div>
        )
    }
}