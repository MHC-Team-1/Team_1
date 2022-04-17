import './Mission3Result.css';
import { Link } from "react-router-dom";
import React from 'react';

function Mission3Result(props) {
    return( 
        <Link to="/Loading">
            <div className='mission3'>
                <div className="result3y"/>
            </div>
        </Link>
    
    );
}

export default Mission3Result;