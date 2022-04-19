import './GameIntro.css';
import { Link } from "react-router-dom";

function GameIntro() {
   
    return( 
        <Link to="/Mission1">
            <div className='GameIntro'>
                <div class="parent">
                <img className="Talk1" alt="Talk1" src="img/Talk1.png" />
                <img className="Talk2" alt="Talk2" src="img/Talk2.png" />
                <img className="Talk3" alt="Talk3" src="img/Talk3.png" />
                <img className="Talk4" alt="Talk4" src="img/Talk4.png" />
                <img className="Talk5" alt="Talk5" src="img/Talk5.png" />
                <img className="Talk6" alt="Talk6" src="img/Talk6.png" />
                <Link to="/Mission1"><img className="Tembtn1" alt="Tembtn" src="img/Tembtn.png"/></Link>
                </div>
            </div>
        </Link>
    );
}

export default GameIntro