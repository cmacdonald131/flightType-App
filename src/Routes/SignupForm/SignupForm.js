import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AuthApiService from '../../Services/auth-api-service'
import './SignupForm.css'


export default class SignupForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { this.props.history.push('/login') }
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { name, email, username, password, confirmPassword } = ev.target

        //confirms that the user input the correct password

        if (password.value !== confirmPassword.value) {
            console.log(password, confirmPassword)
            alert("Passwords don't match!")
        }

        //posts information to server as a new user

        this.setState({ error: null })
        AuthApiService.postUser({
            username: username.value,
            password: password.value,
            name: name.value,
            email: email.value,
        })
            .then(user => {
                name.value = ''
                email.value = ''
                username.value = ''
                password.value = ''
                confirmPassword.value = ''
                console.log(this.props.history.push('/login'))
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })

    }

    render() {
        return (
            <div className="wrapper">
                <Navbar />
                <form
                    className='SignupForm'
                    onSubmit={this.handleSubmit}
                >
                    <header>
                        <h1>Sign up to get started!</h1>
                    </header>
                    <div className='formSection'>
                        <label htmlFor='SignupForm__uname' style={{ textAlign: "left" }}>
                            Name
                        </label>
                        <input
                            name='name'
                            type='text'
                            placeholder='Enter your Name'
                            required
                            id='SignupForm__name'
                        >
                        </input>
                    </div>
                    <div className='formSection'>
                        <label htmlFor='SignupForm__username' style={{ textAlign: "left" }}>
                            Username
                        </label>
                        <input
                            name='username'
                            type='text'
                            placeholder='Enter your Username'
                            required
                            id='SignupForm__username'
                        >
                        </input>
                    </div>
                    <div className='formSection'>
                        <label htmlFor='SignupForm__password' style={{ textAlign: "left" }}>
                            Password
                        </label>
                        <input
                            name='password'
                            type='password'
                            placeholder='Enter your Password'
                            required
                            id='SignupForm__password'
                            onClick={e => alert('Password must be at least 8 characters, contain no spaces, one upper case, lower case, number and special character.')}
                        >
                        </input>
                    </div>
                    <div className='formSection'>
                        <label htmlFor='SignupForm__confirmPassword' style={{ textAlign: "left" }}>
                            Confirm Password
                             </label>
                        <input
                            name='confirmPassword'
                            type='password'
                            placeholder='Confirm your Password'
                            required
                            id='SignupForm__confirmPassword'
                        >
                        </input>
                    </div>
                    <div className='formSection'>
                        <label htmlFor='SignupForm__email' style={{ textAlign: "left" }}>
                            Email
                            </label>
                        <input
                            name='email'
                            type='text'
                            placeholder='Enter your email'
                            required
                            id='SignupForm__email'
                        >
                        </input>
                    </div>
                    <button type='submit' className="btn" style={{ textAlign: "center" }}>
                        Register
                        </button>
                </form>
            </div>
        )
    }
}