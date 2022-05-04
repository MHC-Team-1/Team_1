import G_BGM from '../assets/G_BGM.mp3'
import Sound from 'react-sound'
import { useState } from 'react'
import './Bgm.css'

function Bgm(handleSongLoading, handleSongPlaying, handleSongFinishedPlaying) {
  const [isPlay, setIsPlay] = useState(false)
  return (
    <div className="Bgm">
      <button className="controller" onClick={() => setIsPlay(!isPlay)}>
        {!isPlay ? 'ON' : 'OFF'}
      </button>
      <Sound
        url={G_BGM}
        playStatus={isPlay ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300 /* in milliseconds */}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
        loop={true}
      />
    </div>
  )
}

export default Bgm
