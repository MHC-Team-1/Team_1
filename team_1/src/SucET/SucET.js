import './SucET.css';
import { Link } from "react-router-dom";

function SucET() {
   
    return( 
        <div className='SucET'>
            <img className="SucETimg" alt="SucETimg" src="img/SucETimg.png"/>

            <Link to="/GFInfo"><img className="Smtbtn" alt="Smtbtn" src="img/Smtbtn.png"/></Link>
    </div>
);
}
export default SucET;
