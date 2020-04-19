import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import FlightDetails from './FlightDetails';


it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <FlightDetails />
            </BrowserRouter>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    });