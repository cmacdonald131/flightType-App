import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from '../src/Routes/Landing/Landing'
import LoginForm from '../src/Routes/LoginForm/LoginForm'
import SignupForm from './Routes/SignupForm/SignupForm'
import SearchSection from '../src/SearchFields/SearchSection/SearchSection'
import TokenService from './Services/token-service'
import IdleService from './Services/idle-service'
import AuthApiService from './Services/auth-api-service'
import ApiContext from './ApiContext'



class App extends Component {
  state = {
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


  render() {
    return (
      <ApiContext.Provider value={{
        user: this.state.user,
        setUser: this.setUser,
      }}>
        <div className="flightType">
          <Switch>
            <Route exact path="/" component={SearchSection} />
            <Route path="/about" component={Landing} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
          </Switch>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App;
