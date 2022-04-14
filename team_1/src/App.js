import Landing from './Landing/Landing'
import Game from './Game/Game'
import Game_intro from './Game_intro/Game_intro'
import Mission1 from './Mission1/Mission1'
import Mission1_result from './Mission1_result/Mission1_result'
import Mission2 from './Mission2/Mission2'
import Mission2_result from './Mission2_result/Mission2_result'
import Mission3 from './Mission3/Mission3'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Game_intro" element={<Game_intro />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Mission1" element={<Mission1/>} />
        <Route path="/Mission1_result" element={<Mission1_result/>}/>
        <Route path="/Mission2" element={<Mission2/>} />
        <Route path="/Mission2_result" element={<Mission2_result/>}/>
        <Route path="/Mission3" element={<Mission3/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
