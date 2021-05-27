import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {useDispatch ,useSelector} from 'react-redux';
import {update_firstname, update_lastname, update_gender, update_age, form_submit} from './actions';
import { useHistory } from "react-router";
import {RangeStepInput} from 'react-range-step-input';
import Popup from 'reactjs-popup';

const Loginpage = () => {

    const[firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const[gender, setGender] = useState('');
    const[age, setAge] = useState(18);
    const[terms, setTerms] = useState(false);
    const username = useSelector(state => state.username);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault()  
        console.log(firstname, lastname, terms, age, gender); 
        if(firstname.length > 0) {
            if(lastname.length > 0) {
                if(terms === true) {
                    if(gender.length > 0) {
                        dispatch(update_firstname(firstname));
                        dispatch(update_lastname(lastname));
                        dispatch(update_gender(gender));
                        dispatch(update_age(age));
                        dispatch(form_submit());
                        history.push('/fresult');
                        return true
                    }
                }
            }
        }
        setFirstname('');
        setLastname('');
        setGender('');
        setAge(18);
        return false
    }

    const onFormSubmit = (event) => {
        event.preventDefault()   
        history.push('/home');
    }

        return (
            <div className='container col-sm-12 col-lg-12'>
                <h1>Hi {username}</h1>
                <h1>Welcome to Form page</h1>
                    <div className='form-div'>
                        <form onSubmit={onSubmit} className='signinform'>
                            <input type='text' placeholder='First Name' onChange={(event) => {setFirstname(event.target.value)}} value={firstname} className='form-control form-group txtinput'/>
                            <input type='text' placeholder='Last Name' onChange={(event) => {setLastname(event.target.value)}} value={lastname} className='form-control form-group txtinput'/>
                            <div onChange={(event) => {setGender(event.target.value)}}>
                                <h3>Select Gender</h3>
                                <h3>Male <input type="radio" value="Male" name="gender" /></h3>
                                <h3>Female <input type="radio" value="Female" name="gender" /></h3>
                                <h3>Other <input type="radio" value="Other" name="gender" /></h3>
                            </div>
                            <h3>Select Age</h3>
                            <RangeStepInput
                                min={18} max={60}
                                value={age} step={1}
                                onChange={(event) => {setAge(event.target.value)}}
                            />
                            <h3>{age}</h3>
                            <label>
                                <input type='checkbox' checked={terms} onChange={(event) => {setTerms(true)}}/>
                                <span>   I agree to the Terms & Conditions</span>
                            </label>
                            <input type='submit' className='btn btn-danger btn-block signupsubmit' value='Submit' />
                        </form>
                        <h3></h3>
                        <Popup trigger={<button className='btn btn-danger btn-block signupsubmit'>Review Form</button>} position="right center">
                            <div className='form-div signupsubmit'>
                                <h3>First Name : {firstname}</h3>
                                <h3>Last Name : {lastname}</h3>
                                <h3>Gender : {gender}</h3>
                                <h3>Age : {age}</h3>
                            </div>
                        </Popup>
                        <h3></h3>
                        <form onSubmit={onFormSubmit} className='signinform'>
                            <input type='submit' className='btn btn-danger btn-block signupsubmit' value='Homepage' />
                        </form>
                    </div>
            </div>                                                   
        );
    }

export default Loginpage