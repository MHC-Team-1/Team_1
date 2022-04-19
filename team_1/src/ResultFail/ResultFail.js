import './ResultFail.css';
import { Link } from "react-router-dom";

function ResultFail() {
   
    return( 
        <div className='ResultFail'>
                       <Link to="/HintPage"><img className="Hint" alt="Hint" src="img/Hint.png"/></Link>
                       <Link to="/Mission1"><img className="Retry1" alt="Retry" src="img/Retry.png"/></Link>
                       <Link to="/ResultSuc"><img className="Tembtn4" alt="Tembtn" src="img/Tembtn.png"/></Link>


    </div>
);
}
export default ResultFail;
