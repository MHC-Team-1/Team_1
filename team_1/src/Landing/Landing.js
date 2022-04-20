import './Landing.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='Landing'>
      <div class="parent">
      <div class="Leaf"></div>
    
      <img className="LOGO" alt="LOGO" src="img/LOGO.png" />

      <img className="RM" alt="RM" src="img/RM.png"/>
      </div>
<div>
    <div>
        <Link to="/GameIntro"><img className="YBUTTON" alt="YBUTTON" src="img/YBUTTON.png"/></Link>
      </div>
      </div>
      <Link to="/GameIntro"><img className="Frame1" alt="Frame1" src="img/Frame1.png"/></Link>
      <div>
      <img className="Ltext" alt="Ltext" src="img/Ltext.png"/>
      </div>

      <img className="Frame2" alt="Frame2" src="img/Frame2.png"/>
      <img className="Kit" alt="Kit" src="img/Kit.png"/>
      <div className="info">
        정상적이지 않은 방법으로 응모 시 경품 추첨에서 제외될 수  있습니다.<br></br>
        경품은 사정에 따라 일부 변경될 수 있습니다.
      </div>
      
  </div>
  )
}



export default Landing