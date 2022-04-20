import './SucBH.css';
import { Link } from "react-router-dom";

function SucBH() {
   
    return( 
        <div className='SucBH'>
            <img className="SucBHimg" alt="SucBHimg" src="img/SucBHimg.png"/>

            <Link to="/GFInfo"><img className="Smtbtn" alt="Smtbtn" src="img/Smtbtn.png"/></Link>
    </div>
);
}
export default SucBH;
