import './Mission2.css';
import { Link } from "react-router-dom";
import React from "react";

function Mission2() {
   /* const [currentClick, setCurrentClick] = React.useState(null);
    // const [btnR1, setBtnR1] = React.useState(0);
    const [btnR2, setBtnR2] = React.useState(0);
    const [btnR3, setBtnR3] = React.useState(0);
    let test1 = 0;

    const GetClick = (e) => {
        setCurrentClick(e.target.id);
        console.log(e.target.id);
    };

    const setBtn = (e) => {
        if(e===1){
            setBtnR1(1);
            test1 = 1
            console.log(test1+"hi");
        }
        else if(e===2){
            setBtnR2(1);
        }
        else if(e===3){
            setBtnR3(1);
        }
    };*/

   /* React.useEffect(
        (e) => {
            let current = document.getElementById(currentClick);
            if (currentClick !== null) {
                
                console.log(current);
                
                if(current.id === "bbtn1" && test1 === 0){
                    current.style = "background : URL(https://i.ibb.co/GP5n2nv/Group-10-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                    setBtn(1);
                    console.log(test1);
                }
            
                if(current.id === "bbtn2"){
                   if(btnR2 === 0){
                        current.style = "background : URL(https://i.ibb.co/GJH2Jxn/Group-9-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";        
                    }
                    setBtnR2(1);
                }

                if(current.id === "bbtn3"){
                    if(btnR3 === 0){
                        current.style = "background : URL(https://i.ibb.co/b30rVCH/Group-8-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                    }
                    setBtnR3(1);
                }
                console.log(test1);                
            }

            if(btnR2 !== 0){
                let re2 = document.getElementById(btnR2);
                if(re2.id === "bbtn2"){
                    re2.style = "background : URL(https://i.ibb.co/bRfwR4b/Group-9.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                }    
            }
            if(btnR3 !== 0){
                let re3 = document.getElementById(btnR3);
                if(re3.id === "bbtn3"){
                    re3.style = "background : URL(https://i.ibb.co/tcgFx5V/Group-8.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                }
            }
            
        },
    );*/

    return( 
        <div className='mission2'>
            <div className="topbar2"/>
            <div className="comment">
                원하는 색을 선택하고<td/>버튼을 누르세요. (다중 선택 가능)
            </div>
            
            {/* <div className="brec1">
                <button id="bbtn1" className="bbtn1" onClick={GetClick}/>
                <button id="bbtn2" className="bbtn2" onClick={GetClick}/>
                <button id="bbtn3" className="bbtn3" onClick={GetClick}/>
            </div> */}
            <div className="brec2">
                <Link to="/Mission2Result">
                    <button className="next_btn"/>
                </Link>
            </div>
        </div>

    );
    }

export default Mission2;