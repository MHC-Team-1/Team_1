import './Landing.css';


function Home() {
    return( 
        <div>
            <img className="icon" alt="icon" src="img/icon.jpg" />
            <div className="title">
            구스팜(로고)
            <div className='sub'>good+farm이다 (슬로건)</div>
            </div>
            <div>
                <div className='text'>여기는 텍스트를 채우는 공간입니다.
                여기는 텍스트를 채우는 공간입니다.여기는 텍스트를 채우는 공간입니다.</div>
            </div>
            <div>
                <button type="gamebtn">> 게임 시작하기</button>
                <div className='link'>구스팜 구경가기</div>
            </div>
            
        </div>
    );
}

export default Home; 