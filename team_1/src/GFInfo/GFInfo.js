import './GFInfo.css'
import { Link } from 'react-router-dom'

function GFInfo() {
  return (
    <div className='GFInfo'>
      <img className="GFInfoimg" alt="GFInfoimg" src="img/GFInfoimg.png" />
      <Link to='www.naver.com'><img className="news1" alt="news1" src="img/news1.png" /></Link>
      <img className="news2" alt="news2" src="img/news2.png" />
      <img className="news3" alt="news3" src="img/news3.png" />

      <Link to='/Event'><img className="Eventbtn" alt="Eventbtn" src="img/Eventbtn.png" />
</Link>
  </div>
  )
}

export default GFInfo