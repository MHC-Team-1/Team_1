import './Mission1Result.css';
import { Link } from "react-router-dom"
import React from 'react';

export function Mission1Result() {
    return( 
        <Link to="/Mission2">
            <div className='mission1Result'>
                <div className='topbar1'>
                    <div className='topbar1s'/>
                    <div className='topbar1m'/>
                </div>
                <div className='comment1r'/>
                <div className='result1'>
                    <div className='reback'>
                        <div className='seed'/>
                    </div> 
                    <div className='refront'/>
                </div>
                <div className='nextstage'/>
            </div>
        </Link>
    );
}
export default Mission1Result;
