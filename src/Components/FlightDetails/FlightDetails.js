import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import './FlightDetails.css'
import Navbar from '../Navbar/Navbar'


export default class FlightDetails extends Component {
    static contextType = ApiContext


    render() {
        return (
            <div>
                <Navbar />
                <section className="searchResults">
                    <h1>Your Flights</h1>
                    {this.context.flights.map(flights => (
                        <ul>
                        <li>{flights.name}</li>
                        <li>{flights.company}</li>
                        <li>{flights.departure_time}</li>
                        <li>{flights.arrival_time}</li>
                        <li>{flights.departure_airport}</li>
                        <li>{flights.arrival_airport}</li>
                        <button
                            className='flight__delete'
                            type='button'
                            onClick={e => this.context.deleteFlight(flights.id)}
                        >Delete Flight
                        </button>
                        </ul>
                    ))}
                </section>

            </div>
        )
    }
}