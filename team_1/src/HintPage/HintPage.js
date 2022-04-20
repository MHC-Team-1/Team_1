import './HintPage.css';
import { Link } from "react-router-dom";

function HintPage() {
   
    return( 
        <div className='HintPage'>
        <div>
            <img className="Hintimg" alt="Hintimg" src="img/Hintimg.png"/>
        </div>
        <Link to="/Mission1">
            <div className="Retry1"/>
        </Link>
        </div>
);
}
export default HintPage;
