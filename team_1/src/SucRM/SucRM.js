import './SucRM.css';
import { Link } from "react-router-dom";

function SucRM() {
   
    return( 
        <div className='SucRM'>
            <img className="SucRMimg" alt="SucRMimg" src="img/SucRMimg.png"/>

            <Link to="/GFInfo"><img className="Smtbtn" alt="Smtbtn" src="img/Smtbtn.png"/></Link>
    </div>
);
}
export default SucRM;
