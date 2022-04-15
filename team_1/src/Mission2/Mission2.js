import './Mission2.css';
import { Link } from "react-router-dom";

function Mission2() {

    return( 
        <div className='mission2'>
            <div className="topbar2"/>
            <div className="comment">
                원하는 색을 선택하고<td/>버튼을 누르세요. (다중 선택 가능)
            </div>
            
            <div className="brec1">
                <button className="bbtn1"/>
                <button className="bbtn2"/>
                <button className="bbtn3"/>
            </div>
            
            <div className="brec2">
                <Link to="/Mission3">
                    <button className="next_btn"/>
                </Link>
            </div>
           
        </div>

    );
    }

export default Mission2;