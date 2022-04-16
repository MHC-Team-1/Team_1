import Landing from './Landing/Landing'
import Game from './Game/Game'
import GameIntro from './GameIntro/GameIntro'
import Mission1 from './Mission1/Mission1'
import Mission1Result from './Mission1Result/Mission1Result'
import Mission2 from './Mission2/Mission2'
import Mission2Result from './Mission2Result/Mission2Result'
import Mission3 from './Mission3/Mission3'
import Mission3Result from './Mission3Result/Mission3Result'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/GameIntro" element={<GameIntro />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Mission1" element={<Mission1/>} />
        <Route path="/Mission1Result" element={<Mission1Result/>}/>
        <Route path="/Mission2" element={<Mission2/>} />
        <Route path="/Mission2Result" element={<Mission2Result/>}/>
        <Route path="/Mission3" element={<Mission3/>} />
        <Route path="/Mission3Result" element={<Mission3Result/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App