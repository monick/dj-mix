import { combineReducers } from "../../../../Library/Caches/typescript/3.3/node_modules/redux";

const defaultState = {
  title: 'Title',
  artist: 'Artist',
  trackLength: 0
};

const singleTrackReducer = (isLeftReducer) => 
  (state = defaultState, action) => {
    debugger;
    if(isLeftReducer !== !!action.isLeft)
      return state;
    
    switch (action.type) {
      case 'LOAD TRACK':
          return {
            title: action.title,
            album: action.album,
            picture: action.picture,
            artist: action.artist,
            trackLength: action.trackLength,
            audio: action.audio
          }
      case 'PLAY AUDIO':
          return {
            ...state,
            isAudioPlaying: action.isAudioPlaying
          }
      case 'PAUSE AUDIO':
          return {
            ...state,
            isAudioPlaying: !action.isAudioPlaying
          }
      default:
        return state; 
    }
}

const tracksReducer = combineReducers({
  left: singleTrackReducer(true),
  right: singleTrackReducer(false)
})


export default combineReducers({
  tracks: tracksReducer
});