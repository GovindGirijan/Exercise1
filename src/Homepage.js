import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import './App';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";

const Homepage = () => {

    const history = useHistory();
    const username = useSelector(state => state.username);
    console.log(username);

    const onformclick = (event) => {
        event.preventDefault()
        history.push('/finput');
    }

    const onresultclick = (event) => {
        event.preventDefault()
        history.push('/fresult');
    }

    const onlogoutclick = (event) => {
        event.preventDefault()
        history.push('/');
    }

    const items = ["Homepage","Formpage","Formresultpage"]

        return (
                    <div className='container col-sm-12 col-lg-12'>
                        <h1>Hi {username}</h1>
                        <h1>Welcome to Home page</h1>
                        <div className='form-div'>
                            <button className='btn btn-danger btn-block signupsubmit' onClick={onformclick}>Open Form</button>
                            <button className='btn btn-danger btn-block signupsubmit' onClick={onresultclick}>View Form Result</button>
                            <button className='btn btn-danger btn-block signupsubmit' onClick={onlogoutclick}>Log Out</button>
                        </div>
                    </div>
        );
}

export default Homepage