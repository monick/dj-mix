import track from '../track.mp3';
import jsmediatags from 'jsmediatags';
import { getTrack as getAudio } from '../Utils';

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

export const toogleAction = (isLeft) => (dispatch, getState) => {
    const state = getState();
    const track = getAudio(state, isLeft);
    if(track.isAudioPlaying) {
        dispatch(pauseMusic(isLeft, track.audio));
    } else {
        dispatch(playMusic(isLeft, track.audio));
    }
};
const playMusic = (isLeft) => (dispatch, getState) => {
    const state = getState();
    const track = getAudio(state, isLeft);
    
    if(track.audio !== undefined){
        track.audio.play();
    }
    dispatch({
        type: 'PLAY AUDIO',
        isLeft: isLeft,
        isAudioPlaying: true,
        audio: track.audio
    })
}

const pauseMusic = (isLeft) => (dispatch, getState) => {
    const state = getState();
    const track = getAudio(state, isLeft);
    track.audio.pause();
    dispatch({
        type: 'PAUSE AUDIO',
        isLeft: isLeft,
        isAudioPlaying: true,
        audio: track.audio     
    })
}