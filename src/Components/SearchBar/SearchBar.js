import React, { Component } from 'react'
import './SearchBar.css'


export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <section className="search">
                    <label htmlFor="FlightSearch" style={{textAlign: "left"}}>Search by Flight</label>
                    <input
                        className='search-box'
                        type='text'
                        placeholder='Search for flight, tail, airport, or city'
                        required
                        id='flightsearch'
                        >
                    </input>
                    <button type='submit' className="btn" style={{marginLeft: "10%"}}>
                            Track
                        </button>
                </section>
                
            </div>
        )
    }
}