import React from 'react';
import './TrackComponent.css';
import music from './music.png';
import { loadTrack } from './actions/trackActions';
import { connect } from 'react-redux';

const TrackCover = (props) => (
    <div className='track__cover' onClick={props.loadTrack}>
        <img src={music}></img>
    </div>
);

const mapDispatchToProps = {
    loadTrack
};
const TrackCoverConnected = connect(undefined, mapDispatchToProps)(TrackCover);

// const loadTrack = () => {
//     return fetch(track)
//         .then(function(response) {
//             return response.blob();
//         });
// }



// const handleClick = () => {
//     loadTrack()
//         .then((blob) => {
//             jsmediatags.read(blob, {
//                 onSuccess: function(tag) {
//                     console.log(tag);
//                 },
//                 onError: function(error) {
//                     console.log(':(', error.type, error.info);
//                 }
//             });
//         });
// }



class TrackComponent extends React.Component {
    render() {
        const alignmentClassName = this.props.left 
            ? 'track--left' 
            : 'track--right';
        return (
            <div className={`track ${alignmentClassName}`}>
                <TrackCoverConnected />
                <div className='track__info'>
                    <p>{this.props.author}</p>
                    <p>{this.props.title}</p>
                    <h1>{this.props.songLength}</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    author: state.artist,
    title: state.title
});
export default connect(mapStateToProps) (TrackComponent);