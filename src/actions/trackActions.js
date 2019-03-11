import track from '../track.mp3';
import jsmediatags from 'jsmediatags';

const loadTrackFromServer = async () => {
    const response = await fetch(track)

    return response.blob();
}

const getTrack = () => {
    return new Promise(resolve => {
        const song = new Audio([track]);
        song.addEventListener('loadeddata', () => {
            resolve(song);
        });
    });
}   

const getTrackDuration = async() => {
    
    const audio = await getTrack();
    const durationInMiliSeconds = audio.duration * 1000;
    
    return durationInMiliSeconds;
}

const readTags = (blob) => {
    return new Promise((resolve, reject) => {
        jsmediatags.read(blob, {
            onSuccess: (tag) => {
                resolve(tag);
            },
            onError: (error) => {
                console.log(':(', error.type, error.info);
                reject(error);
            }
        });
    })
}

export const loadTrack = (isLeft) => async dispatch => {
    const blob = await loadTrackFromServer();
    const songDuration = await getTrackDuration();

    const audio = await getTrack();
    const tag = await readTags(blob);
    dispatch({
        type: 'LOAD TRACK',
        title: tag.tags.title,
        album: tag.tags.album,
        picture: tag.tags.picture,
        artist: tag.tags.artist,
        isLeft: isLeft,
        trackLength: songDuration,
        audio: audio
    })
}

export const toogleAction = (isLeft, audio, isAudioPlaying) => dispatch => {
    if(isAudioPlaying) {
        pauseMusic(isLeft, audio, dispatch);
        console.log('pause');
    } else {
        playMusic(isLeft, audio, dispatch);
        console.loga('play')
    }
};
const playMusic = (isLeft, audio) => dispatch => {
    audio.play();
    dispatch({
        type: 'PLAY AUDIO',
        isLeft: isLeft,
        isAudioPlaying: true   
    })
}

const pauseMusic = (isLeft, audio) => dispatch => {
    audio.pause();
    dispatch({
        type: 'PAUSE AUDIO',
        isLeft: isLeft,
        isAudioPlaying: true        
    })
}