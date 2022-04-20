// useSound.js

import { useEffect } from 'react'
import { Howl } from 'howler';
// example
import useSound from 'hooks/useSound';
import effectSound from 'utils/effectSound';
import BGM from './BGM/BGM.mp3';
import ES from 'audios/ES.mp3';

const Component = () => {
    // BGM 재생
    useSound(BGM, 1, 2000);
  
    // 효과음 할당
    // 재생이 필요한 시점에 es.play();
    const es = effectSound(ES, 1); 
}

function useSound(src, volume = 1, fadeoutTime = 0) {
    let sound;
    const soundStop = () => sound.stop();
    const soundPlay = (src) => {
        sound = new Howl({ src });
        sound.volume(volume);
        sound.play();
    }

    useEffect(() => {
        soundPlay(src);
        sound.on('play', () => {
            const fadeouttime = fadeoutTime;
            setTimeout(() => sound.fade(volume, 0, fadeouttime), (sound.duration() - sound.seek()) * 1000 - fadeouttime);
        });
        return soundStop;
    }, []);
}

export default useSound;