import track from '../track.mp3';
import jsmediatags from 'jsmediatags';
import { reject } from 'q';

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

const openTrack = (blob, songDuration, dispatch, isLeft) => {
    new Promise((resolve, reject) => {
        jsmediatags.read(blob, {
            onSuccess: (tag) => {
                resolve(tag);
            },
            onError: (error) => {
                console.log(':(', error.type, error.info);
                reject(error);
            }
        });
    }).then(tag => {
        dispatch({
            type: 'LOAD TRACK',
            title: tag.tags.title,
            album: tag.tags.album,
            picture: tag.tags.picture,
            artist: tag.tags.artist,
            isLeft: isLeft,
            trackLength: songDuration
        })
    })
}

export const loadTrack = (isLeft) => async dispatch => {
    const blob = await loadTrackFromServer();
    const songDuration = await getTrackDuration();

    await openTrack(blob, songDuration, dispatch, isLeft);
}