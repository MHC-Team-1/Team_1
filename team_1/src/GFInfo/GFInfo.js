import './GFInfo.css'
import { Link } from 'react-router-dom'

function GFInfo() {
  return (
    <div className='GFInfo'>
      <img className="GFInfobg" alt="GFInfobg" src="img/GFInfobg.png" />
      <Link to='/Event'><img className="Smtbtn" alt="Smtbtn" src="img/Smtbtn.png" />
</Link>
  </div>
  )
}

export default GFInfo