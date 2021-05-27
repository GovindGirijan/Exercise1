import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {useDispatch} from 'react-redux';
import {update_user} from './actions';
import { useHistory } from "react-router";

const Loginpage = () => {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault()   
        if(username.length > 0) {
            if(password.length > 0) {
                dispatch(update_user(username));
                history.push('/home');
                return true
                }
            }
        setUsername('');
        setPassword('');
        return false
    }

        return (
            <div className='container col-sm-12 col-lg-12'>
                <h1>Welcome to Login page</h1>
                    <div className='form-div'>
                        <form onSubmit={onSubmit} className='signinform'>
                            <input type='text' placeholder='Username' onChange={(event) => {setUsername(event.target.value)}} value={username} className='form-control form-group txtinput'/>
                            <input type='password' placeholder='Password' onChange={(event) => {setPassword(event.target.value)} } value={password} className='form-control form-group txtinput'/>
                            <input type='submit' className='btn btn-danger btn-block signupsubmit' value='Log In' />
                        </form>
                    </div>
            </div>                                                   
        );
    }

export default Loginpage