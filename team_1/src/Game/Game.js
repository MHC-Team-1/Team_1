import './Game.css';
import { Link } from 'react-router-dom'


function Game() {
   
    return( 
        <div>
            <div className='rec'> </div>
            <div classname='he1'>
                안녕하세요!
                </div>

            <div className='he2'>
                구스팜에 오신걸 환영해요!
            </div>


            <img className='pic'/>

            <div className='he3'>
                구스팜 게임플레이는 만족스러우셨나요?<br/>구로구에 위치한 스마트팜은 앞으로도<br/>다양한 체험과 함께 여러분을 찾아갑니다.<br/>
                 아래 구스팜 구경하기 버튼을 눌러 구경해보세요!
            </div>
            
           
          <button className='btn2'>네, 시작해볼게요!</button>
         
          </div>
    );
}

export default Game;
