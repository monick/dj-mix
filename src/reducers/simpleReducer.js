import { combineReducers } from "../../../../Library/Caches/typescript/3.3/node_modules/redux";

const defaultState = {
  title: 'Title',
  artist: 'Artist'
};

const singleTrackReducer = (isLeftReducer) => 
  (state = defaultState, action) => {
    if(isLeftReducer !== !!action.isLeft)
      return state;
    
    switch (action.type) {
      case 'LOAD TRACK':
          console.log('asdfasdfasdf')
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

const tracksReducer = combineReducers({
  left: singleTrackReducer(true),
  right: singleTrackReducer(false)
})


export default combineReducers({
  tracks: tracksReducer
});