import './Mission1.css';
import { Link } from "react-router-dom"
import React from 'react';

let Result1 = 0;


function Mission1() {
    let currentClick1 = "";

    const GetClick1 = (e) => {
        currentClick1 = e.target.id;
        setResult1();
    };

    const setResult1 = (e) => {
        let current1 = document.getElementById(currentClick1);
        if (currentClick1 !== null) {
            console.log(current1);
            
            if(current1.id === "abtn1"){
                Result1 = 1;
            }
            else if(current1.id === "abtn2"){
                Result1 = 2;
            }
            else if(current1.id === "abtn3"){
                Result1 = 3;
            }
            else if(current1.id === "abtn4"){
                Result1 = 4;
            }
        }

   };

    return( 
            <div className='mission1'>
                <div className="comment">
                    4개 중에 뭘 심어야 좋을까?
                </div>
                <div className="rec1">
                    <Link to="/Mission1Result">
                        <button id= "abtn1" className="abtn1" onClick={GetClick1}/>
                    </Link>
                    <Link to="/Mission1Result">
                        <button id= "abtn2" className="abtn2" onClick={GetClick1}/>
                    </Link>
                    
                </div>
                <div className="rec2">
                    <Link to="/Mission1Result">
                        <button id= "abtn3" className="abtn3" onClick={GetClick1}/>
                    </Link>
                    <Link to="/Mission1Result">
                        <button id= "abtn4" className="abtn4" onClick={GetClick1}/>
                    </Link>
                    
                </div>
        </div>
    );
}
export function sendResut1(){
    return Result1;
}


export default Mission1;
