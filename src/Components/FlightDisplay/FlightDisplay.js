import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import { Link } from 'react-router-dom'


export default class FlightDisplay extends Component {
    static contextType = ApiContext

    render() {
        return (
            <div>
                <section className="searchResults">
                    <h1>Your Flights</h1>
                    {this.context.flights.map(flights => (
                        <li>{flights.name}
                            <Link to='/flights'>Flight Details</Link>
                            <button
                                className='flight__delete'
                                type='button'
                                onClick={e => this.context.deleteFlight(flights.id)}
                            >Delete Flight
                            </button></li>
                    ))}
                </section>

            </div>
        )
    }

}