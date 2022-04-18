import './Loading.css';
import { Link } from "react-router-dom";
import * as Mission1 from '../Mission1/Mission1.js';
import * as Mission2 from '../Mission2/Mission2.js';
import * as Mission3 from '../Mission3/Mission3.js';

function Loading() {


    // let [ alert, alertSet ] = useState(true);
    // useEffect(()=>{
    //   let timer = setTimeout(()=>{ alertSet(false) }, 2000);
    // });
   

   let Mis1Result = Mission1.sendResut1();
   let Mis2Result = Mission2.sendResult2();
   let Mis3Result = Mission3.setWater1();

   console.log("Mis1 : " + Mis1Result);
   console.log("Mis2 : " + Mis2Result);
   console.log("Mis3 : " + Mis3Result);


    return( 
        <div className='Loading'>
            <div><img className="Loadimg" alt="Loadimg" src="img/Loadimg.png"/></div>
                {/* alert === true */}
                       <Link to="/ResultFail"><img className="Tembtn3" alt="Tembtn" src="img/Tembtn.png"/></Link>
    </div>
);
}
export default Loading;
