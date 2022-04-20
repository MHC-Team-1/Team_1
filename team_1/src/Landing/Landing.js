import './Landing.css'
import { Link } from 'react-router-dom'

function Landing() {

  document.getElementById('audio1').play();

  return (
    <div className='Landing'>
      <audio src='../../public/BGM/BGM.mp3' allow='autoplay' type='BGM/mp3'></audio>
      <div className="parent">
        <div className="backimg"/>
        <div className="Leaf"></div>
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
  

  </div>


  )
}





export default Landing