import './Mission2Result.css';
import { Link } from "react-router-dom";
import * as React from "react";

function Mission2Result() {

    return( 
        <Link to="/Mission3">
            <div className='mission2'>
                <div className="topbar2"/>
            
                <div className="result2_light"/>
           
            </div>
        </Link>
    );
    }

export default Mission2Result;