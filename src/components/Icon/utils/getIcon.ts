import back from '../assets/mp3-back.svg';
import close from '../assets/mp3-close.svg';
import forward from '../assets/mp3-forward.svg';
import next from '../assets/mp3-next.svg';
import pause from '../assets/mp3-pause.svg';
import play from '../assets/mp3-play.svg';
import restart from '../assets/mp3-restart.svg';
import stop from '../assets/mp3-stop.svg';


export type getIconNames = 'back' | 'close' | 'forward' | 'next' |  'pause' | 'play' | 'restart' | 'stop'


export const getIcon = (iconName: getIconNames) => {
    const iconBank: {[index:string]:string} = {
        'back': back,
        'close': close,
        'forward': forward,
        'next': next,
        'pause': pause,
        'play': play,
        'resart': restart,
        'stop': stop
    };    

    if (!(iconName in iconBank)) return null;
    return iconBank[iconName];
};
