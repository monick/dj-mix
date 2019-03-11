import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BottomComponent.css';
import { connect } from 'react-redux';
import { getTrack } from './Utils';
import { toogleAction } from './actions/trackActions';

class BottomComponent extends React.Component {
    
    render() {
        const alignmentClassName = this.props.left 
            ? 'bottom--left' 
            : 'bottom--right';
        
        return (
            <div className={`bottom ${alignmentClassName}`}>
                <div className='play-btn'>
                    <button onClick={toogleAction(this.props.left, this.props.audio, !this.props.isAudioPlaying)}>
                        <FontAwesomeIcon size='3x' color="white" icon='play' />
                    </button>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = {
    toogleAction
};

const mapStateToProps = (state, props) => {
    const track = getTrack(state, props.left);

    return {
        audio: track.audio,
        trackLength: track.trackLength,
        isAudioPlaying: track.isAudioPlaying
    };
};
export default connect(mapStateToProps, mapDispatchToProps) (BottomComponent);