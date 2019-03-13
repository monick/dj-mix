import React from 'react';
import vinyl from './vinyl.svg';
import './DeckComponent.css';
import { getTrack } from './Utils';
import { connect } from 'react-redux';

class DeckComponent extends React.Component {
    render() {
        const alignmentClassName = this.props.left 
            ? 'deck--left' 
            : 'deck--right';
        const shouldVinylRotate = this.props.isAudioPlaying
            ? 'deck__image__rotate'
            : 'deck__image__stop '; 
        return (
            <div className={`deck ${alignmentClassName}`}>
                <img className={`deck__image ${shouldVinylRotate}`} src={vinyl}></img> 
            </div>
        )
    }
};

const mapStateToProps = (state, props) => {
    const track = getTrack(state, props.left);
    return {
        isAudioPlaying: track.isAudioPlaying
    };
};

export default connect(mapStateToProps, undefined) (DeckComponent);