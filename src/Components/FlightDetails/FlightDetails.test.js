import React from 'react';
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import FlightDetails from './FlightDetails';


it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <MemoryRouter>
                <FlightDetails />
            </MemoryRouter>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    });