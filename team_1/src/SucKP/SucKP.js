import './SucKP.css';
import { Link } from "react-router-dom";

function SucKP() {
   
    return( 
        <div className='SucKP'>
            <img className="SucKPimg" alt="SucKPimg" src="img/SucKPimg.png"/>

            <Link to="/GFInfo"><img className="Smtbtn" alt="Smtbtn" src="img/Smtbtn.png"/></Link>
    </div>
);
}
export default SucKP;
