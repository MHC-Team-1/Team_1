import './Mission1Result.css';
import { Link } from "react-router-dom"
import React, {useState} from 'react';

export function Mission1Result() {

    return( 
        <Link to="/Mission2">
            <div className='mission1Result'>
        </div>
        </Link>
    );
}
export default Mission1Result;
