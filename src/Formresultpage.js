import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";

const Loginpage = () => {

    const username = useSelector(state => state.username);
    const firstname = useSelector(state => state.firstname);
    const lastname = useSelector(state => state.lastname);
    const gender = useSelector(state => state.gender);
    const age = useSelector(state => state.age);
    const isSubmit = useSelector(state => state.isSubmit);
    const history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault()   
        history.push('/home');
    }

        return (
            <div className='container col-sm-12 col-lg-12'>
                <h1>Hi {username}</h1>
                <h1>Welcome to Form Results page</h1>
                { 
                    (isSubmit === true)
                    ? <div className='form-div'>
                    <h3>First Name : {firstname}</h3>
                    <h3>Last Name : {lastname}</h3>
                    <h3>Gender : {gender}</h3>
                    <h3>Age : {age}</h3>
                  </div> 
                     
                    : <h3>Please submit the form to view the results</h3>
                }
                    <br></br>
                    <form onSubmit={onSubmit} className='signinform'>
                    <input type='submit' className='btn btn-danger btn-block signupsubmit' value='Homepage' />
                    </form>
            </div>                                                   
        );
    }

export default Loginpage