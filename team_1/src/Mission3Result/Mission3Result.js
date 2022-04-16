import './Mission3Result.css';
import React from 'react';

function Mission3Result(props) {
    return( 
        <div className='mission1'>
            <div className="topbar3"/>  
            
            <p> 전달 : {props.result1}</p>
        </div>

    );
    }

export default Mission3Result;