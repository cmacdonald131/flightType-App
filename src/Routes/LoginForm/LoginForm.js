import React, { Component } from 'react'
import Navbar from '../../SearchFields/Navbar/Navbar'
import './LoginForm.css'

export default class LoginForm extends Component {
    render() {
        return (
            <div className="LoginForm_head">

                <form className='LoginForm'>

                    <Navbar />
                    <header>
                        <h1 style={{textAlign: "center"}}>Login to your account</h1>
                    </header>
                    <section className="Login_section">
                        <div className='username' style={{marginBottom: "10px"}}>
                            <label htmlFor='LoginForm__username' className="label" style={{textAlign: "left"}}>
                                Username
                            </label>
                            <input
                                required
                                name='username'
                                placeholder='Enter Username'
                                id='LoginForm__username'
                                >
                            </input>
                        </div>
                        <div className='password' style={{marginBottom: "10px"}}>
                            <label htmlFor='LoginForm__password' className="label" style={{textAlign: "left"}}>
                                Password
                            </label>
                            <input
                                required
                                name='password'
                                type='password'
                                placeholder='Enter Password'
                                id='LoginForm__password'
                                >
                            </input>
                        </div>
                        <button
                            className="submit"
                            type='submit'
                        >Login
                        </button>
                    </section>
                </form>
            </div>
        )
    }
}