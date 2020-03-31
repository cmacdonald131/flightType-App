import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ApiContext from '../../ApiContext'
import FlightDisplay from '../../Components/FlightDisplay/FlightDisplay';


class Users extends Component {
    static contextType = ApiContext;
    componentDidMount() {
        this.context.getFlights()
    }

    render() {
        return (
            <div className="UserPage">
                <Navbar />
                <div className="UserPageSection">
                    <header role="banner">
                        <h1>Your Home Page</h1>
                    </header>
                    <FlightDisplay />
                    <button
                        className='create_flight'
                        type='button'
                        onClick={e => this.props.history.push('/createflight')}
                    >Create your flight
                    </button>

                </div>

            </div>
        );
    }
}

export default Users;