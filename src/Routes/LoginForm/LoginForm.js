import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AuthApiService from '../../Services/auth-api-service'
import ApiContext from '../../ApiContext'
import './LoginForm.css'

export default class LoginForm extends Component {
    static contextType = ApiContext
    static defaultProps = {
    }

    //when a successful login occurs the team page is rendered

    state = { error: null }
    onLoginSuccess = () => {
        this.props.history.push('/user')
    }

    //On clicking the Login button when entering correct login information a call is sent to post an authorized login to the server through a JWT 
    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { username, password } = ev.target

        AuthApiService.postLogin({
            username: username.value,
            password: password.value,
        })
            .then(res => {
                this.context.setUser(username.value)
                username.value = ''
                password.value = ''
                this.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
                alert("We couldn't log you in with the username and/or password you entered.  Please try again.")
            })
    }
    render() {
        return (
            <div className="LoginForm_head">
                <form
                    className='LoginForm'
                    onSubmit={this.handleSubmitJwtAuth}
                >
                    <Navbar />
                    <header>
                        <h1 style={{ textAlign: "center" }}>Login to your account</h1>
                    </header>
                    <section className="Login_section">
                        <div className='username' style={{ marginBottom: "10px" }}>
                            <label htmlFor='LoginForm__username' className="label" style={{ textAlign: "left" }}>
                                Username
                            </label>
                            <input
                                required
                                name='username'
                                placeholder='Enter Username'
                                id='LoginForm__username'
                                aria-label="Enter your username"
                            >
                            </input>
                        </div>
                        <div className='password' style={{ marginBottom: "10px" }}>
                            <label htmlFor='LoginForm__password' className="label" style={{ textAlign: "left" }}>
                                Password
                            </label>
                            <input
                                required
                                name='password'
                                type='password'
                                placeholder='Enter Password'
                                id='LoginForm__password'
                                aria-label="Enter your password"
                            >
                            </input>
                        </div>
                        <button
                            className="submit"
                            type='submit'
                            aria-label="Login"
                        >Login
                        </button>
                    </section>
                </form>
            </div>
        )
    }
}