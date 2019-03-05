import track from '../track.mp3';
import jsmediatags from 'jsmediatags';

const loadTrackFromServer = async () => {
    const response = await fetch(track)

    return response.blob();
}

export const loadTrack = () => async dispatch => {
    const blob = await loadTrackFromServer();

    jsmediatags.read(blob, {
        onSuccess: function(tag) { 
            dispatch({
                type: 'LOAD TRACK',
                title: tag.tags.title,
                album: tag.tags.album,
                picture: tag.tags.picture,
                artist: tag.tags.artist
            })
        },
        onError: function(error) {
            console.log(':(', error.type, error.info);
        }
    });
}