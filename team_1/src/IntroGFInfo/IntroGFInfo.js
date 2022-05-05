import './IntroGFInfo.css'
import { Link } from 'react-router-dom'


function IntroGFInfo() {
  return (
    <div className='IntroGFInfo'>
      <img className="IntroGFInfoimg" alt="IntroGFInfoimg" src="img/IntroGFInfoimg.png" />
      <img onClick={() => window.open('https://www.viva100.com/main/view.php?key=20211216010004721', '_blank')} className="news1" alt="news1" src="img/news1.png" />
      <img onClick={() => window.open('http://www.m-i.kr/news/articleView.html?idxno=911328', '_blank')} className="news2" alt="news2" src="img/news2.png" />
      <img onClick={() => window.open('https://www.viva100.com/main/view.php?key=20220118010004822', '_blank')} className="news3" alt="news3" src="img/news3.png" />

      <Link to="/GameIntro">
          <div className="YBUTTON" src="img/YBUTTON.png"/></Link>

  </div>
  )
}

export default IntroGFInfo