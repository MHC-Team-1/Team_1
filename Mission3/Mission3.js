import './Mission3.css';
import { Link } from "react-router-dom";
import React from "react";

let water1 = 0;
let water2 = 0;
let water3 = 0;

function Mission3() {
    let currentClick3 = "";

    const GetClick3 = (e) => {
        currentClick3 = e.target.id;
        setResult3();
    };

    const setResult3 = (e) => {
        let current3 = document.getElementById(currentClick3);
        if (currentClick3 !== null) {
            console.log(current3);
                
            if(current3.id === "cbtn1"){
                water1 = 1;
            }
            else if(current3.id === "cbtn2"){
                water2 = 1;
            }
            else if(current3.id === "cbtn3"){
                water3 = 1;
            }
        }
   };


    return( 
        <div className='mission3'>
            <div className="comment">
            양액으로 식물에게 영양분을 공급해야하는데<td/>어떤 농도가 좋을까?
            </div>
            
            <div className="brec1">
                <Link to="/Mission3Result">
                    <button id = "cbtn1" className="cbtn1" onClick={GetClick3}/>
                </Link>
                <Link to="/Mission3Result">
                    <button id = "cbtn2" className="cbtn2" onClick={GetClick3}/>
                </Link>
                <Link to="/Mission3Result">
                    <button id = "cbtn3" className="cbtn3" onClick={GetClick3}/>
                </Link>
            </div>
        </div>
    );
}

export function setWater1(){
    return water1;
}

export function setWater2(){
    return water2;
}

export function setWater3(){
    return water3;
}

export default Mission3;