import './Landing.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <div className="rec"> </div>

      <img className="pic" alt="icon" src="img/icon.png" />

      <div className="he1">구스팜(로고)</div>

      <div className="he2">good+farm이다 (슬로건)</div>

      <div className="he3">
        여기는 텍스트를 채우는 공간입니다.
        <br></br>여기는 텍스트를 채우는 공간입니다.
        <br></br>여기는 텍스트를 채우는 공간입니다.
      </div>

      <div>
        <Link to="/game_intro">게임시작</Link>
      </div>
      {/* <button className="btn2" onclick="location.href='../Game_intro/Game_intro'">
        게임 시작
      </button> */}
      <div className="link">구스팜 구경가기</div>
    </div>
  )
}

export default Landing