import './Game_intro.css';
import { Link , Route, BrowserRouter as Router } from "react-router-dom";

function Game_intro() {
   
    return( 
            <div className='Game_intro'>
                <div className="topbar1"/>
                <div class="parent">
                <img className="Talk1" alt="Talk1" src="img/Talk1.png" />
                <img className="Talk2" alt="Talk2" src="img/Talk2.png" />
                <img className="Talk3" alt="Talk3" src="img/Talk3.png" />
                <img className="Talk4" alt="Talk4" src="img/Talk4.png" />
                <img className="Talk5" alt="Talk5" src="img/Talk5.png" />
                <img className="Talk6" alt="Talk6" src="img/Talk6.png" />
            </div>
                
        </div>
    );
}

export default Game_intro
