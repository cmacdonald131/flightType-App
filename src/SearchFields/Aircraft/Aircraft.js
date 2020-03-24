import React, { Component } from 'react'
import './Aircraft.css'


export default class Aircraft extends Component {
    render() {
        return (
            <div>
                <section className="aircraft">
                    <label htmlFor="AircraftSearch" style={{textAlign: "left"}}>Search by Aircraft Type</label>
                    <input
                        className='search-box'
                        type='text'
                        placeholder='Search by aircraft make or model'
                        required
                        id='Aircraftsearch'
                        >
                    </input>
                    <button style={{marginLeft: "10%"}}>Search</button>
                </section>
                
            </div>
        )
    }
}