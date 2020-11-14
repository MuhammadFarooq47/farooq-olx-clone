import { Link, useHistory } from 'react-router-dom';
import React, { Component, useState } from "react";
import Logo from '../src/images/logo.png';
import './Signup.css';
import { auth } from './firebase'

const SignUp = () => {
    //signup ka
    const history = useHistory();
    const [formVal, setformVal] = useState({
        // fName: '',
        fullName: '',
        email: '',
        password: '',
    });

    const inputValue = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)

        const value = e.target.value;
        const name = e.target.name;

        setformVal({...formVal,[name]:value});
    }

    const Register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(formVal.email, formVal.password)
            .then((result) => {
                console.log(result)
                history.push('/')
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                console.log(errorMessage)
                // ...
            });
    }
    return (
        <>
            <Link to="/">
                <img src={Logo} alt="Logo" className="auth_logo" />
            </Link>
            <form className='form_main'>
                <h3>Register</h3>

                {/* <div className="form-group">
                    <label>First name</label>
                    <input 
                    name="fName"
                    onChange={inputValue} 
                    type="text" 
                    value={formVal.fName} 
                    className="form-control" 
                    placeholder="First name" />
                </div> */}

                <div className="form-group">
                    <label>Full name</label>
                    <input 
                    name="fullName"
                    onChange={inputValue} 
                    type="text" 
                    value={formVal.fullName} 
                    className="form-control" 
                    placeholder="Full name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                    name="email"
                    onChange={inputValue} 
                    type="email" value={formVal.email} 
                    className="form-control" 
                    placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    name="password"
                    onChange={inputValue} 
                    type="password" value={formVal.password} 
                    className="form-control" 
                    placeholder="Enter password" />
                </div>

                <button
                 type="submit" 
                 className="btn btn-dark btn-lg btn-block" 
                 onClick={Register}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to='/login' className="link">log in?</Link>
                </p>
            </form>
        </>
    );
}


export default SignUp;