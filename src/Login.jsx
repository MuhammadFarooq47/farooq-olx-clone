import { Link, useHistory } from 'react-router-dom';
import React, { Component, useState } from "react";
import Logo from '../src/images/logo.png';
import './Signup.css'
import { auth } from './firebase'

const Login = () => {
    //login ka login ka button dikhao
        const [email, setEmail] = useState("")
        const [Password, setPassword] = useState("")

        const history = useHistory();

        const login = (event) => {
            event.preventDefault();

            auth.signInWithEmailAndPassword(email, Password)
            .then((auth) => {
                history.push('/')
            })
            .catch((e) => {
                alert(e.message)
            })

        }

        // const emailValue= (event) => {
        //     setEmail(event.target.value)
        // }

        // const passwordValue= (event) => {
        //     setPassword(event.target.value)
        // }

        return (
            <>
             <Link to="/">
            <img src={Logo} alt="Logo" className="auth_logo" />
             </Link> 
            <form className='form_main'>
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    onChange={event => setPassword(event.target.value)}
                    value={Password}
                    type="password" 
                    className="form-control" 
                    placeholder="Enter password" />
                </div>

                <button onClick={login} type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                <p className="forgot-password text-right">
                    Don't have account register now <Link to="signup" className='link'>Register</Link>
                </p>
            </form>
            </>
        );
    }


    export default Login;