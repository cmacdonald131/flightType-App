import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import config from './config'
import Landing from '../src/Routes/Landing/Landing'
import LoginForm from '../src/Routes/LoginForm/LoginForm'
import SignupForm from './Routes/SignupForm/SignupForm'
import TokenService from './Services/token-service'
import IdleService from './Services/idle-service'
import AuthApiService from './Services/auth-api-service'
import ApiContext from './ApiContext'
import Users from './Routes/Users/Users'
import FlightForm from './Components/FlightForm/FlightForm'
import FlightDetails from './Components/FlightDetails/FlightDetails'
import PublicOnlyRoute from './Utils/PublicOnlyRoute'
import PrivateRoute from './Utils/PrivateRoute'

import './App.css'



class App extends Component {
  state = {
    flights: [],
    hasError: false,
    user: TokenService.getAuthToken(),
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle)

    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
    }
  }

  setUser = (user) => {
    this.setState({
      user
    })
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()

    this.forceUpdate()
  }

  getFlights = () => {
    fetch(`${config.API_ENDPOINT}/flights`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })

      .then(flights => {
        return flights.json()
      }).then(data => {
        this.setState({
          flights: data
        })
      })
  }

  deleteFlight = (id) => {
    return fetch(`${config.API_ENDPOINT}/flights/${id}`, {
      method: "Delete",
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })
      .then(data => {
        this.setState({
          flights: this.state.flights.filter(flight => flight.id !== id)
        })
      })
  }


  render() {
    return (
      <ApiContext.Provider value={{
        flights: this.state.flights,
        user: this.state.user,
        setUser: this.setUser,
        getFlights: this.getFlights,
        deleteFlight: this.deleteFlight,
      }}>
        <div className="flightType" style={{ backgroundColor: "white" }}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <PublicOnlyRoute
              path={'/signup'}
              component={SignupForm}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginForm}
            />
            <PrivateRoute
              path={'/user'}
              component={Users}
            />
            <PrivateRoute
              path={'/createflight'}
              component={FlightForm}
            />
            <PrivateRoute
              path={'/flight/:id'}
              component={FlightDetails}
            />
          </Switch>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App;
