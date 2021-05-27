import React 
from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Homepage from './Homepage'
import Loginpage from './Loginpage'
import Forminputpage from './Forminputpage';
import Formresultpage from './Formresultpage';
import {
    BrowserRouter, Route
  } from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <div className='container col-sm-12 col-lg-12'>
                <BrowserRouter>
                    <Route path='/' exact component={Loginpage} />
                    <Route path='/home' exact component={Homepage} />
                    <Route path='/finput' exact component={Forminputpage} />
                    <Route path='/fresult' exact component={Formresultpage} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App