import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Landing from '../src/Routes/Landing/Landing'
import LoginForm from '../src/Routes/LoginForm/LoginForm'
import SignupForm from './Routes/SignupForm/SignupForm'
import SearchSection from '../src/SearchFields/SearchSection/SearchSection'


class App extends Component {
  render() {
    return (
      <div className="flightType">
        <Route exact path="/" component={SearchSection} />
        <Route path="/about" component={Landing} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
      </div>
    )
  }
}

export default App;
