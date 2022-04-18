import './Mission2.css';
import { Link } from "react-router-dom";
import React from "react";

let light1 = 0;
let light2 = 0;
let light3 = 0;
let Result2 = 0;

function Mission2() {
    let currentClick = "";

    const GetClick = (e) => {
        currentClick = e.target.id;
        setResult2();
    };

   const setResult2 = (e) => {
        let current = document.getElementById(currentClick);
        if (currentClick !== null) {
            console.log(current);
                
            if(current.id === "bbtn1" && light1 === 0){
                current.style = "background : URL(https://i.ibb.co/GP5n2nv/Group-10-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                light1 = 1;
                console.log("light1 = 0 : "+light1);
            }
            else if(current.id === "bbtn1" && light1 === 1){
                current.style = "background : URL(https://i.ibb.co/1J2xNM0/Group-10.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                light1=0;
                console.log("light1 = 1 : "+light1);
            }

            if(current.id === "bbtn2" && light2 === 0){
                current.style = "background : URL(https://i.ibb.co/GJH2Jxn/Group-9-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";        
                light2 = 1;
                console.log("light2 = 0 : "+light2);
            }
            else if(current.id === "bbtn2" && light2 === 1){
                current.style = "background : URL(https://i.ibb.co/bRfwR4b/Group-9.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                light2 = 0
                console.log("light2 = 1 : "+light2);
            }

            if(current.id === "bbtn3" && light3 === 0){
                current.style = "background : URL(https://i.ibb.co/b30rVCH/Group-8-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                light3 = 1;
                console.log("light3 = 0 : "+light3);
            }
            else if(current.id === "bbtn3" && light3 === 1){
                current.style = "background : URL(https://i.ibb.co/tcgFx5V/Group-8.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                light3 = 0;
                console.log("light3 = 1 : "+light3);
            }
        }
   };

   const makeResult = () => {
        Result2 = light1 && light2 && light3;
        console.log("Result : " + Result2);
   };
        

    return( 
        <div className='mission2'>
            <div className="comment">
                원하는 색을 선택하고<td/>버튼을 누르세요. (다중 선택 가능)
            </div>
            
            {<div className="brec1">
                <button id="bbtn1" className="bbtn1" onClick={GetClick}/>
                <button id="bbtn2" className="bbtn2" onClick={GetClick}/>
                <button id="bbtn3" className="bbtn3" onClick={GetClick}/>
            </div> }
            <div className="brec2">
                <Link to="/Mission2Result">
                    <button className="next_btn" onClick={makeResult}/>
                </Link>
            </div>
        </div>

    );
}

export function setLight1(){
    return light1;
}

export function setLight2(){
    return light2;
}

export function setLight3(){
    return light3;
}

export function sendResult2(){
    return Result2;
}

export default Mission2;