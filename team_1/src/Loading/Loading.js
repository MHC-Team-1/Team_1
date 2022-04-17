import './Loading.css';
import { Link } from "react-router-dom";

function Loading() {
   
    return( 
        <div className='Loading'>
            <div><img className="Loadimg" alt="Loadimg" src="img/Loadimg.png"/></div>
                       <Link to="/ResultFail"><img className="Tembtn3" alt="Tembtn" src="img/Tembtn.png"/></Link>
    </div>
);
}
export default Loading;
