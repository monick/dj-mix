const defaultState = {
  title: 'Title',
  artist: 'Artist'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD TRACK':
        return {
          title: action.title,
          album: action.album,
          picture: action.picture,
          artist: action.artist
        }

    default:
      return state;
  }
}