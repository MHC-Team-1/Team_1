import './Mission2Result.css';
import { Link } from "react-router-dom";
import * as React from "react";
import * as Mission2 from '../Mission2/Mission2.js';

function Mission2Result() {
    let ReLight1 = Mission2.setLight1();
    let ReLight2 = Mission2.setLight2();
    let ReLight3 = Mission2.setLight3();
    let LightResult = "";
    console.log("Relight1 : "+ReLight1);
    console.log("Relight2 : "+ReLight2); 
    console.log("Relight3 : "+ReLight3);
    
    function setLight(){
        if(ReLight1 === 1 && ReLight2 === 0 && ReLight3 === 0){
            LightResult = "result2_light_r";
            return LightResult;
        }
        else if(ReLight1 === 1 && ReLight2 === 1 && ReLight3 === 0){
            LightResult = "result2_light_y";
            return LightResult;
        }
        else if(ReLight1 === 1 && ReLight2 === 1 && ReLight3 === 1){
            LightResult = "result2_light_w";
            return LightResult;
        }
        else if(ReLight1 === 0 && ReLight2 === 1 && ReLight3 === 0){
            LightResult = "result2_light_g";
            return LightResult;
        }
        else if(ReLight1 === 0 && ReLight2 === 1 && ReLight3 === 1){
            LightResult = "result2_light_c";
            return LightResult;
        }
        else if(ReLight1 === 0 && ReLight2 === 0 && ReLight3 === 1){
            LightResult = "result2_light_b";
            return LightResult;
        }
        else if(ReLight1 === 1 && ReLight2 === 0 && ReLight3 === 1){
            LightResult = "result2_light_m";
            return LightResult;
        }
    }

    return( 
        <Link to="/Mission3">
            <div className='mission2'>
            <div className='comment'>
                    LED광을 켰습니다!
            </div>
            <div className = {setLight()}/>
            <div className='nextstage'/>
            </div>
        </Link>
    );
    }

export default Mission2Result;