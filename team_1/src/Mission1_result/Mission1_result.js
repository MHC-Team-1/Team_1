import './Mission1_result.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

function Mission1_result() {
   
    return( 
        <Link to="/Mission2">
            <div className='mission1_result'>
                <div className="topbar1"/>
                <button className="result1"/>
        </div>
        </Link>
    );
}
export default Mission1_result;
