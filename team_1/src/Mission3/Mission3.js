import './Mission3.css';
import { Link } from "react-router-dom";


function Mission3() {
   
    return( 
        <div className='mission1'>
            <div className="topbar3"/>
            <div className="comment">
            양액으로 식물에게 영양분을 공급해야하는데<td/>어떤 농도가 좋을까?
            </div>
            
            <div className="brec1">
                <button className="cbtn1"/>
                <button className="cbtn2"/>
                <button className="cbtn3"/>
            </div>

            <Link to="/Loading"><img className="Tembtn2" alt="Tembtn" src="img/Tembtn.png"/></Link>

        </div>

    );
    }

export default Mission3;