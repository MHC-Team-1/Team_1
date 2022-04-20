import './FailET.css';
import { Link } from "react-router-dom";

function FailET() {
   
    return( 
        <div className='FailET'>
            <img className="FailETimg" alt="FailETimg" src="img/FailETimg.png"/>

            <Link to="/HintPage"><img className="Hint" alt="Hint" src="img/Hint.png"/></Link>
            <Link to="/Mission1"><img className="Retry" alt="Retry" src="img/Retry.png"/></Link>
 </div>
);
}
export default FailET;
