import './Mission2.css';
import { Link } from "react-router-dom";
import * as React from "react";

function Mission2() {
    const [currentClick, setCurrentClick] = React.useState(null);
    var btnR1 = 0, btnR2 = 0, btnR3 = 0;

    const GetClick = (e) => {
        setCurrentClick(e.target.id);
        console.log(e.target.id);
    };

    React.useEffect(
        (e) => {
          if (currentClick !== null) {
            let current = document.getElementById(currentClick);
            console.log(current);
            if(current.id === "bbtn1"){
                if(btnR1 === 0){
                    current.style = "background : URL(https://i.ibb.co/GP5n2nv/Group-10-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                    console.log(btnR1);
                    btnR1 = 1;
                    console.log(btnR1);
                }
                else if(btnR1 === 1){
                    current.style = "background : URL(https://i.ibb.co/1J2xNM0/Group-10.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                    btnR1 = 0;
                }
            }
           else if(current.id === "bbtn2"){
               if(btnR2 === 0){
                   current.style = "background : URL(https://i.ibb.co/GJH2Jxn/Group-9-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                    btnR2 = 1;
                    console.log(btnR2);
                }
               else if(btnR2 === 1){
                    current.style = "background : URL(https://i.ibb.co/bRfwR4b/Group-9.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                    btnR2 = 0;
                }
            
            }
            else if(current.id === "bbtn3"){
                if(btnR3 === 0){
                    current.style = "background : URL(https://i.ibb.co/b30rVCH/Group-8-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                    btnR3 = 1;
                    console.log(btnR3);
                }
                else if(btnR3 === 1){
                    current.style = "background : URL(https://i.ibb.co/tcgFx5V/Group-8.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
                    btnR3 = 0;
                }
            }
        }
        },
      );

    return( 
        <div className='mission2'>
            <div className="topbar2"/>
            <div className="comment">
                원하는 색을 선택하고<td/>버튼을 누르세요. (다중 선택 가능)
            </div>
            
            <div className="brec1">
                <button id="bbtn1" className="bbtn1" onClick={GetClick}/>
                <button id="bbtn2" className="bbtn2" onClick={GetClick}/>
                <button id="bbtn3" className="bbtn3" onClick={GetClick}/>
            </div>
            <div className="brec2">
                <Link to="/Mission2Result">
                    <button className="next_btn"/>
                </Link>
            </div>
        </div>

    );
    }

export default Mission2;