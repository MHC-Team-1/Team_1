import './Loading.css';
import { Link } from "react-router-dom";
import * as Mission1 from '../Mission1/Mission1.js';
import * as Mission2 from '../Mission2/Mission2.js';
import * as Mission3 from '../Mission3/Mission3.js';

function Loading() {
    let Mis1Result = Mission1.sendResut1();
    let Mis2Result = Mission2.sendResult2();
    let Mis3Result = Mission3.setWater1();

    let GameFailSuc = Mis2Result && Mis3Result;

    console.log(GameFailSuc);


    // let [ alert, alertSet ] = useState(true);
    // useEffect(()=>{
    //   let timer = setTimeout(()=>{ alertSet(false) }, 2000);
    // });

   console.log("Mis1 : " + Mis1Result);
   console.log("Mis2 : " + Mis2Result);
   console.log("Mis3 : " + Mis3Result);

   let resultpage = "";

    function setResult(){
        if(Mis1Result === 1 && GameFailSuc !== 1){
            resultpage = "/FailRM";
            return resultpage;
        }
        else if(Mis1Result === 1 && GameFailSuc === 1){
            resultpage = "/SucRM";
            return resultpage;
        }
        else if(Mis1Result === 2 && GameFailSuc !== 1){
            resultpage = "/FailKP";
            return resultpage;
        }
        else if(Mis1Result === 2 && GameFailSuc === 1){
            resultpage = "/SucKP";
            return resultpage;
        }
        else if(Mis1Result === 3 && GameFailSuc !== 1){
            resultpage = "/FailBH";
            return resultpage;
        }
        else if(Mis1Result === 3 && GameFailSuc === 1){
            resultpage = "/SucBH";
            return resultpage;
        }
        else if(Mis1Result === 4 && GameFailSuc !== 1){
            resultpage = "/FailET";
            return resultpage;
        }
        else if(Mis1Result === 4 && GameFailSuc === 1){
            resultpage = "/SucET";
            return resultpage;
        }
        
    }
    return( 
        <div className='Loading'>
                {/* alert === true */}
                <div className="parent">
                <img className="Loadimg" alt="Loadimg" src="img/Loadimg.png"/>  
                <img className="Whi" alt="Whi" src="img/Whi.png"/>  
                </div>
                <div className='Tembtn3Link'>
                <Link to={setResult()}>
                    <img className="Tembtn3" alt="Tembtn" src="img/Loadbtn.png"/>
                </Link>
                </div>
    </div>
);
}
export default Loading;
