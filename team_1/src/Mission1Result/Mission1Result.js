import './Mission1Result.css';
import { Link } from "react-router-dom";

function Mission1Result() {
   
    return( 
        <Link to="/Mission2">
            <div className='mission1Result'>
                <div className="topbar1"/>
                <button className="result1"/>
        </div>
        </Link>
    );
}
export default Mission1Result;
