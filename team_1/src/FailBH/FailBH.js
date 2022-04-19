import './FailBH.css';
import { Link } from "react-router-dom";

function FailBH() {
   
    return( 
        <div className='FailBH'>
            <img className="FailBHimg" alt="FailBHimg" src="img/FailBHimg.png"/>
                       <Link to="/HintPage"><img className="Hint" alt="Hint" src="img/Hint.png"/></Link>
                       <Link to="/Mission1"><img className="Retry1" alt="Retry" src="img/Retry.png"/></Link>
                       <Link to="/ResultSuc"><img className="Tembtn4" alt="Tembtn" src="img/Tembtn.png"/></Link>


    </div>
);
}
export default FailBH;
