import './Mission2.css';
import { Link } from "react-router-dom";
import React from "react";

function Mission2() {
    let test1 = 0;
    let test2 = 0;
    let test3 = 0;
    let Result2 = 0;
    let currentClick = "";

    const GetClick = (e) => {
        currentClick = e.target.id;
        setResult2();
    };

   const setResult2 = (e) => {
        let current = document.getElementById(currentClick);
        if (currentClick !== null) {
            console.log(current);
                
            if(current.id === "bbtn1" && test1 === 0){
                current.style = "background : URL(https://i.ibb.co/GP5n2nv/Group-10-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                test1 = 1;
                console.log("test1 = 0 : "+test1);
            }
            else if(current.id === "bbtn1" && test1 === 1){
                current.style = "background : URL(https://i.ibb.co/1J2xNM0/Group-10.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                test1=0;
                console.log("test1 = 1 : "+test1);
            }

            if(current.id === "bbtn2" && test2 == 0){
                current.style = "background : URL(https://i.ibb.co/GJH2Jxn/Group-9-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";        
                test2 = 1;
                console.log("test2 = 0 : "+test2);
            }
            else if(current.id === "bbtn2" && test2 == 1){
                current.style = "background : URL(https://i.ibb.co/bRfwR4b/Group-9.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                test2 = 0
                console.log("test2 = 1 : "+test2);
            }

            if(current.id === "bbtn3" && test3 == 0){
                current.style = "background : URL(https://i.ibb.co/b30rVCH/Group-8-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                test3 = 1;
                console.log("test3 = 0 : "+test3);
            }
            else if(current.id === "bbtn3" && test3 == 1){
                current.style = "background : URL(https://i.ibb.co/tcgFx5V/Group-8.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                test3 = 0;
                console.log("test3 = 1 : "+test3);
            }
        }
   };

   const makeResult = () => {
        Result2 = test1 && test2 && test3;
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

export default Mission2;