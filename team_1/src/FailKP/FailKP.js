import './FailKP.css';
import { Link } from "react-router-dom";

function FailKP() {
   
    return( 
        <div className='FailKP'>
            <img className="FailKPimg" alt="FailKPimg" src="img/FailKPimg.png"/>

            <Link to="/HintPage"><img className="Hint" alt="Hint" src="img/Hint.png"/></Link>
            <Link to="/Mission1"><img className="Retry" alt="Retry" src="img/Retry.png"/></Link>
 </div>
);
}
export default FailKP;
