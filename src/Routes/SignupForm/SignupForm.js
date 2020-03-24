import React, { Component } from 'react'
import Navbar from '../../SearchFields/Navbar/Navbar'
import './SignupForm.css'


export default class SignupForm extends Component {
    render() {
        return (
            <div className="wrapper">
                <Navbar />
                <form
                    className='SignupForm'
                >
                    <header>
                        <h1>Sign up to get started!</h1>
                    </header>
                    <div className='formSection'>
                        <label htmlFor='SignupForm__username' style={{textAlign: "left"}}>
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
                        <label htmlFor='SignupForm__password' style={{textAlign: "left"}}>
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
                            <label htmlFor='SignupForm__confirmPassword' style={{textAlign: "left"}}>
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
                            <label htmlFor='SignupForm__email' style={{textAlign: "left"}}>
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
                        <button type='submit' className="btn" style={{textAlign: "center"}}>
                            Register
                        </button>
              </form>
            </div>
          )
    }
}