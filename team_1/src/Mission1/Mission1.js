import './Mission1.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

function Mission1() {
    
    const btn_click = function() {
        count ++;
        console.log(count);
    }
   
    return( 
            <div className='mission1'>
                <div className="topbar1"/>
                <div className="comment">
                    4개 중에 뭘 심어야 좋을까?
                </div>
                <div className="rec1">
                    <Link to="/Mission2">
                        <button className="abtn1"/>
                    </Link>
                    <Link to="/Mission2">
                        <button className="abtn2"/>
                    </Link>
                    
                </div>
                <div className="rec2">
                    <Link to="/Mission2">
                        <button className="abtn3" onClick={btn_click()}/>
                    </Link>
                    <Link to="/Mission2">
                        <button className="abtn4"/>
                    </Link>
                </div>
        </div>
    );
}
export default Mission1;
