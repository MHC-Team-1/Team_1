import './Mission1.css';
import { Link } from "react-router-dom"
import React ,{useState} from 'react';

function Mission1() {
    let Result1 = 0;

    const setResult1 = () => {
        Result1 = 1;
        console.log("Result1 : "+Result1);
    }

    return( 
            <div className='mission1'>
                <div className="comment">
                    4개 중에 뭘 심어야 좋을까?
                </div>
                <div className="rec1">
                    <Link to="/Mission1Result">
                        <button className="abtn1"/>
                    </Link>
                    <Link to="/Mission1Result">
                        <button className="abtn2"/>
                    </Link>
                    
                </div>
                <div className="rec2">
                    <Link to="/Mission1Result">
                        <button className="abtn3" onClick={setResult1}/>
                    </Link>
                    <Link to="/Mission1Result">
                        <button className="abtn4"/>
                    </Link>
                    
                </div>
        </div>
    );
}
export default Mission1;
