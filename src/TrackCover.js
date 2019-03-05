import React from 'react';
import music from './music.png';
import { loadTrack } from './actions/trackActions';
import { connect } from 'react-redux';
import { getTrack } from './Utils';

const TrackCover = (props) => (
    <div 
        className='track__cover' 
        onClick={() => props.loadTrack(props.isLeft)}>
        <img src={getPicture(props.picture)}></img>
    </div>
);

const getPicture = (picture) => {
    if(!picture)
        return music;

    const byteArray = new Uint8Array(picture.data);
    const oMyBlob = new Blob(
        [byteArray], 
        {type : picture.format }
    );
    const url = URL.createObjectURL(oMyBlob);

    return url;
}

const mapStateToPops = (state, props) => {
    const track = getTrack(state, props.isLeft);

    return {
        picture: track.picture
    };
};

const mapDispatchToProps = {    
    loadTrack
};
export default connect(mapStateToPops, mapDispatchToProps)(TrackCover);