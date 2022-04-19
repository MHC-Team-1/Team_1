import './HintPage.css';
import { Link } from "react-router-dom";

function HintPage() {
   
    return( 
        <div className='HintPage'>
            <Link to="/FailRM"><img className="Xbtn" alt="Xbtn" src="img/Xbtn.png"/></Link>
        <div>
            <img className="Hintimg" alt="Hintimg" src="img/Hintimg.png"/>
</div>
</div>
);
}
export default HintPage;
