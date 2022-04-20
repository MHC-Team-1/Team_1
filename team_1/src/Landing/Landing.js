import './Landing.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='Landing'>
      <div className="parent">
      <div className="backimg"/>
        <img className="LOGO" alt="LOGO" src="img/LOGO.png" />
        <div className="plantlayout">
          <div className="RM"/>
          <div className="ET"/> 
          <div className="BH"/>
          <div className="KP"/>
        </div>
        <div className="EventText"/>
        <Link to="/GameIntro">
          <div className="YBUTTON" src="img/YBUTTON.png"/>
      </Link>
        
      </div>

      

      <div className="Frame1">
        <div className="next_img"/>
        <div className="eventinfo1"/>
        <div className="info"/>
      </div>
      
      <div className="Frame2">
        <div className="eventinfo2"/>
        <div className="Kit"/>
        <div className="warning"/>
      </div>
    </div>
  )
}



export default Landing