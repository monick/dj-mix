export const loadTrack = (tag) => dispatch => {
    console.log('asdfasdfasdf');
    dispatch({
        type: 'LOAD TRACK',
        title: tag.tags.title,
        album: tag.tags.album,
        picture: tag.tags.picture,
        artist: tag.tags.artist
    })
}