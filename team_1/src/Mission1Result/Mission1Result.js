import './Mission1Result.css';
import { Link } from "react-router-dom"
import React from 'react';
import * as Mission1 from '../Mission1/Mission1.js';

export function Mission1Result() {
    let fromnum = Mission1.setResult1();
    console.log(fromnum);

    return( 
        <Link to="/Mission2">
            <div className='mission1Result'>
        </div>
        </Link>
    );
}
export default Mission1Result;
