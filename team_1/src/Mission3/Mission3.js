import './Mission3.css';
import { Link } from "react-router-dom";


function Mission3() {
    let Result3 = 0;

    const setResult3 = () => {
        Result3 = 1;
        console.log("Result3 : "+Result3);
    }
   
    return( 
        <div className='mission3'>
            <div className="comment">
            양액으로 식물에게 영양분을 공급해야하는데<td/>어떤 농도가 좋을까?
            </div>
            
            <div className="brec1">
                <Link to="/Mission3Result">
                    <button className="cbtn1" onClick={setResult3}/>
                </Link>
                <Link to="/Mission3Result">
                    <button className="cbtn2"/>
                </Link>
                <Link to="/Mission3Result">
                    <button className="cbtn3"/>
                </Link>
            </div>
        </div>
    );
    }

export default Mission3;