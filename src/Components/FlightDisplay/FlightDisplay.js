import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import { Link } from 'react-router-dom'
import './FlightDisplay.css'


export default class FlightDisplay extends Component {
    static contextType = ApiContext

    render() {
        return (
            <div>
                <section className="searchResults">
                    <h1>Your Flights</h1>
                    {this.context.flights.map(flights => (
                        <ul key={flights.id}>
                            <li>
                                <p style={{textAlign: "center"}}>{flights.name}</p>
                                <Link to={'/flight/' + flights.id}>
                                    <button type='button' style={{textAlign: "center"}}>
                                        Flight Details
                                </button>
                                </Link>
                            </li>
                        </ul>
                    ))}
                </section>

            </div>
        )
    }

}