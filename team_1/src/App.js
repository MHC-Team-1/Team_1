import Landing from './Landing/Landing'
import Game from './Game/Game'
import Game_intro from './Game_intro/Game_intro'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Game_intro" element={<Game_intro />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App