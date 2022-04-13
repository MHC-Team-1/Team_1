import Landing from './Landing/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Game from './Game/Game'
import GameIntro from './Game_intro/Game_intro'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game_intro" element={<GameIntro />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App