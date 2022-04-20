import './GFInfo.css'

function GFInfo() {
  return (
    <div className='GFInfo'>
      <img className="GFInfoimg" alt="GFInfoimg" src="img/GFInfoimg.png" />
      <img onClick={() => window.open('https://www.viva100.com/main/view.php?key=20211216010004721', '_blank')} className="news1" alt="news1" src="img/news1.png" />
      <img onClick={() => window.open('http://www.m-i.kr/news/articleView.html?idxno=911328', '_blank')} className="news2" alt="news2" src="img/news2.png" />
      <img onClick={() => window.open('https://www.viva100.com/main/view.php?key=20220118010004822', '_blank')} className="news3" alt="news3" src="img/news3.png" />

      <img onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScn-kvJwqssOMebv-0GDtkYIUSvuY81twVXNGF3KopM0nvmXA/viewform', '_blank')} className="Eventbtn" alt="Eventbtn" src="img/Eventbtn.png" />


  </div>
  )
}

export default GFInfo