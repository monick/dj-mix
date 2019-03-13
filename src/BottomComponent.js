import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BottomComponent.css';
import { connect } from 'react-redux';
import { getTrack } from './Utils';
import { toogleAction } from './actions/trackActions';
import { SliderComponent } from './SliderComponent';

class BottomComponent extends React.Component {
    
    render() {
        const alignmentClassName = this.props.left 
            ? 'bottom--left' 
            : 'bottom--right';
        
        return (
            <div className={`bottom ${alignmentClassName}`}>
                <div className='play-btn'>
                    <button onClick={() => this.props.toogleAction(this.props.left)}>
                        <FontAwesomeIcon size='3x' color="white" icon='play' />
                    </button>
                </div>
                <SliderComponent />
            </div>
        )
    }
};

const mapDispatchToProps = {
    toogleAction
};

export default connect(undefined, mapDispatchToProps) (BottomComponent);