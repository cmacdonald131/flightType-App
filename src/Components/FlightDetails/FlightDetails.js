import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import './FlightDetails.css'
import Navbar from '../Navbar/Navbar'


export default class FlightDetails extends Component {
    static contextType = ApiContext


    render() {
        const flight = this.context.flights.find(f => f.id === parseInt(this.props.match.params.id)) || {}

        return (
            <div className="flightDetails">
                <Navbar />
                <section className="searchResults">
                    <h1>Your Flights</h1>

                    <ul>
                        <li>Flight Name: {flight.name}</li>
                        <li>Airline: {flight.company}</li>
                        <li>Departure Airport: {flight.departure_airport}</li>
                        <li>Departure Time: {flight.departure_time}</li>
                        <li>Arrival Airport: {flight.arrival_airport}</li>
                        <li>Arrival Time: {flight.arrival_time}</li>
                        <button
                            className='flight__delete'
                            type='button'
                            onClick={e => this.context.deleteFlight(flight.id).then(data => this.props.history.push('/user'))}
                        >Delete Flight
                        </button>
                    </ul>
                </section>

            </div>
        )
    }
}