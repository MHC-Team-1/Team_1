import './Loading.css';
import { Link } from "react-router-dom";

function Loading() {

    // let [ alert, alertSet ] = useState(true);
    // useEffect(()=>{
    //   let timer = setTimeout(()=>{ alertSet(false) }, 2000);
    // });
   
    return( 
        <div className='Loading'>
            <div><img className="Loadimg" alt="Loadimg" src="img/Loadimg.png"/></div>
                {/* alert === true */}
                       <Link to="/ResultFail"><img className="Tembtn3" alt="Tembtn" src="img/Tembtn.png"/></Link>
    </div>
);
}
export default Loading;
