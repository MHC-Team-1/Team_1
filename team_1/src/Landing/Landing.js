import './Landing.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='Landing'>
      <div class="parent">
      <div class="TopBG"></div>
      <div class="Leaf"></div>
      {/* <div class="child-3"></div> */}
    </div>

      <img className="Leaf" alt="Leaf" src="img/Leaf.png" />

      <div className="he1">무농약 무공해 구로 스마트팜에서<br></br>채소를 키우며
 기부도하고<br></br>유럽채소 받자!</div>
<div>
    <div>
        <Link to="/GameIntro"><img className="btn1" alt="YBUTTON1" src="img/YBUTTON1.png"/></Link>
      </div>
      </div>
      <Link to="/GameIntro"><img className="Frame1" alt="Frame1" src="img/Frame1.png"/></Link>
      <div className="he3">
      참여기간 : 2022년 4월 20일 ~ 5월 00일 ( 00일간)<br></br>
      당첨발표 : 2022년 5월 00일 (개별 당첨자연락)<br></br>
      참여방법 : 게임을 클리어 한 후 이벤트 응모 버튼을<br></br>
      눌러 정보를 입력하면 참여완료!  
      </div>

      <img className="Frame2" alt="Frame2" src="img/Frame2.png"/>
      <img className="Frame4" alt="Frame4" src="img/Frame4.png"/>
      <div className="info">
        정상적이지 않은 방법으로 응모 시 경품 추첨에서 제외될 수  있습니다.<br></br>
        경품은 사정에 따라 일부 변경될 수 있습니다.
      </div>
      
  </div>
  )
}



export default Landing