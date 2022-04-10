import './Game_intro.css';

function Home() {
    return( 
        <div>
        <div className='rec'> </div>
            
        <img className='pic'/>

            <div className='he1'>
              게임을 시작해볼까요?
          </div>

          <div className='he2'>
              게임방법
          </div>


            <div className='he3'>
                구스팜 게임플레이는 만족스러우셨나요?<br/>구로구에 위치한 스마트팜은 앞으로도<br/>다양한 체험과 함께 여러분을 찾아갑니다.
                <br/>아래 구스팜 구경하기 버튼을 눌러<br/>구경해보세요!
            </div>
            
          <button className='btn2' onclick="location.href='../Missoin1/Mission1.html'">네, 시작해볼게요!</button>
          </div>
    );
}

export default Home;
