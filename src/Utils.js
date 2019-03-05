export const getTrack = (state, isLeft) =>
state.tracks[isLeft ? 'left': 'right'];