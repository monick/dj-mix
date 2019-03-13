import React from 'react';
import { loadTrack } from './actions/trackActions';
import { connect } from 'react-redux';
import { getTrack, getPicture } from './Utils';

const TrackCover = (props) => (
    <div 
        className='track__cover' 
        onClick={() => props.loadTrack(props.isLeft)}>
        <img src={getPicture(props.picture)}></img>
    </div>
);


const mapStateToProps = (state, props) => {
    const track = getTrack(state, props.isLeft);

    return {
        picture: track.picture
    };
};

const mapDispatchToProps = {    
    loadTrack
};
export default connect(mapStateToProps, mapDispatchToProps)(TrackCover);