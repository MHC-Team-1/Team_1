import Landing from './Landing/Landing'
import Game from './Game/Game'
import GameIntro from './GameIntro/GameIntro'
import Mission1 from './Mission1/Mission1'
import Mission2 from './Mission2/Mission2'
import Mission3 from './Mission3/Mission3'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/GameIntro" element={<GameIntro />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Mission1" element={<Mission1/>} />
        <Route path="/Mission2" element={<Mission2/>} />
        <Route path="/Mission3" element={<Mission3/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App