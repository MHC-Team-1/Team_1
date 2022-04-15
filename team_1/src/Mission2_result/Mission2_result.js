import './Mission2_result.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import * as React from "react";

function Mission2_result() {

    return( 
        <Link to="/Mission3">
            <div className='mission2'>
                <div className="topbar2"/>
            
                <div className="result2_light"/>
           
            </div>
        </Link>
    );
    }

export default Mission2_result;