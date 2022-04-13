import './Landing.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='Landing'>
      <div class="parent">
      <div class="TopBG_png1"></div>
      <div class="Leaf"></div>
      {/* <div class="child-3"></div> */}
    </div>

      <div className="rec"> </div>

      <img className="Leaf" alt="Leaf" src="img/Leaf.png" />

      <div className="he2">무농약 무공해 구로 스마트팜에서<br></br>채소를 키우며
 기부도하고<br></br>유럽채소 받자!</div>
    <div>
        <Link to="/game_intro"><img className="btn" alt="YBUTTON1" src="img/YBUTTON1.png"/></Link>
      </div>
    <div className='btn'>이벤트 안내</div>
      <div className="he3">
      참여기간 : 2022년 4월 20일 ~ 5월 00일 ( 00일간)
당첨발표 : 2022년 5월 00일 (개별 당첨자연락)
참여방법 :  게임을 클리어 한 후 이벤트응모버튼을
눌러 정보                    
                               를 입력하면 참여완료!  
      </div>

      <div className="link">구스팜 구경가기</div>
    </div>
  )
}



export default Landing