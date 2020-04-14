import React, { Component } from 'react'
import config from '../../config'
import uuid from 'uuid/v4'
import TokenService from '../../Services/token-service'
import './FlightForm.css'
import Navbar from '../Navbar/Navbar'

export default class FlightForm extends Component {
    //creates new flight from information input and posts it to flights endpoint
    onSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const departure_airport = e.target.departure_airport.value;
        const arrival_airport = e.target.arrival_airport.value;
        const company = e.target.company.value;
        const arrival_time = e.target.arrival_time.value;
        const departure_time = e.target.departure_time.value;
        const id = uuid;

        fetch(`${config.API_ENDPOINT}/flights`, {
            method: "Post",
            body: JSON.stringify({
                name: name,
                departure_airport: departure_airport,
                arrival_airport: arrival_airport,
                company: company,
                arrival_time: arrival_time,
                departure_time: departure_time,
                id: id,

            }),
            headers: {
                'Authorization': `Bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            }
        })

            .then(flight => {
                return flight.json()
            }).then(data => {
                this.props.history.push('/user')
            })

    }

    onCancel = (e) => {
        e.preventDefault();
        this.props.history.push('/user')
    }

    render() {
        return (
            <div className="AddFlight">
                <Navbar />
                <form onSubmit={this.onSubmit} className="add-flight">
                    <section className="aircraft">
                        <h1 style={{ textAlign: "center", fontSize: "30px" }}>Create your flight</h1>
                        <label htmlFor="FlightForm" style={{ textAlign: "left" }}>Flight Name</label>
                        <input
                            className='search-box'
                            name='name'
                            type='text'
                            placeholder='Input flight name'
                            required
                            id='FlightForm'
                        >
                        </input>
                        <label htmlFor="FlightForm" style={{ textAlign: "left" }}>Departure Airport</label>
                        <input
                            className='search-box'
                            name='departure_airport'
                            type='text'
                            placeholder='Input departure airport'
                            required
                            id='FlightForm'
                        >
                        </input>
                        <label htmlFor="FlightForm" style={{ textAlign: "left" }}>Arrival Airport</label>
                        <input
                            className='search-box'
                            name='arrival_airport'
                            type='text'
                            placeholder='Input arrival airport'
                            required
                            id='FlightForm'
                        >
                        </input>
                        <label htmlFor="FlightForm" style={{ textAlign: "left" }}>Airline</label>
                        <input
                            className='search-box'
                            name='company'
                            type='text'
                            placeholder='Input airline company'
                            required
                            id='FlightForm'
                        >
                        </input>
                        <label htmlFor="FlightForm" style={{ textAlign: "left" }}>Arrival Time</label>
                        <input
                            className='search-box'
                            name='arrival_time'
                            type='time'
                            placeholder='Input arrival time'
                            required
                            id='FlightForm'
                        >
                        </input>
                        <label htmlFor="FlightForm" style={{ textAlign: "left" }}>Departure Time</label>
                        <input
                            className='search-box'
                            name='departure_time'
                            type='time'
                            placeholder='Input departure time'
                            required
                            id='FlightForm'
                        >
                        </input>
                        <button >Create Flight</button>
                        <button type="reset" className="reset">Reset</button>
                        <button onClick={this.onCancel} type="cancel" className="cancel">Cancel</button>
                    </section>
                </form>
            </div>
        )
    }
}