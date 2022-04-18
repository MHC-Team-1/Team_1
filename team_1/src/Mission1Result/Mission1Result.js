import './Mission1Result.css';
import { Link } from "react-router-dom"
import React from 'react';

export function Mission1Result() {
    return( 
        <Link to="/Mission2">
            <div className='mission1Result'>
                <div className='comment'>
                    씨앗을 넣었습니다!
                </div>
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
