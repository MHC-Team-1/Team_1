import './Mission3Result.css';
import { Link } from "react-router-dom";
import React from 'react';
import * as Mission3 from '../Mission3/Mission3.js';

function Mission3Result() {
    let ReWater1 = Mission3.setWater1();
    let ReWater2 = Mission3.setWater2();
    let ReWater3 = Mission3.setWater3();
    let WaterResult = "";
    console.log("ReWater1 : "+ReWater1);
    console.log("ReWater2 : "+ReWater2); 
    console.log("ReWater3 : "+ReWater3);

    if(ReWater1 == 1){
        WaterResult = "result3_y";
    }
    else if(ReWater2 == 1){
        WaterResult = "result3_g";
    }
    else if(ReWater3 == 1){
        WaterResult = "result3_b";
    }

    return( 
        <Link to="/Loading">
            <div className='mission3'>
                <div className={WaterResult}/>
            </div>
        </Link>
    
    );
}
export default Mission3Result;