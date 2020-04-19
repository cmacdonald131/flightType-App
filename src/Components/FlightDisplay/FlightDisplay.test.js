import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import FlightDisplay from './FlightDisplay';


it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <FlightDisplay />
            </BrowserRouter>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    });

    
