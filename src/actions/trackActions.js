import jsmediatags from 'jsmediatags';
import { getTrack as getAudio } from '../Utils';

const loadFromFile = async () => {
    return new Promise((resolve, reject) => {
        const x = document.createElement("INPUT");
        x.type = "file";
        x.onchange = (e) => {
            const file = e.target.files[0];

            resolve(file);
        };
        x.click();
    })
}

export const loadTrack = (isLeft) => async dispatch => {
    const blob = await loadFromFile();
    const url = URL.createObjectURL(blob);
    console.log('url:', url);
    const songDuration = await getTrackDuration(URL);
    console.log('duration:', songDuration);

    const audio = await getTrack(url);
    const tag = await readTags(blob);
    console.log('tag:', tag);
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

export const toogleVolume = (isLeft, value) => (dispatch, getState) => {
    const state = getState();
    const track = getAudio(state, isLeft).audio;

    track.volume = value[0];
}

const getTrack = (url) => {
    return new Promise(resolve => {
        const song = new Audio([url]);
        // song.addEventListener('loadeddata', () => {
            resolve(song);
        // });
    });
}

const getTrackDuration = async (url) => {
    const audio = await getTrack(url);
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

const playMusic = (isLeft) => (dispatch, getState) => {
    const state = getState();
    const track = getAudio(state, isLeft);
    
    if(track.audio !== undefined){
        track.audio.play();
    }
    dispatch({
        type: 'PLAY AUDIO',
        isLeft: isLeft,
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
        audio: track.audio     
    })
}