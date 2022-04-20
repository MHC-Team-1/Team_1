import './FailRM.css';
import { Link } from "react-router-dom";

function FailRM() {
   
    return( 
        <div className='FailRM'>
            <img className="FailRMimg" alt="FailRMimg" src="img/FailRMimg.png"/>

            <Link to="/HintPage"><img className="Hint" alt="Hint" src="img/Hint.png"/></Link>
            <Link to="/Mission1"><img className="Retry" alt="Retry" src="img/Retry.png"/></Link>
 </div>
);
}
export default FailRM;
