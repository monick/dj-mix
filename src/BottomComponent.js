import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BottomComponent.css';
import { connect } from 'react-redux';
import { toogleAction } from './actions/trackActions';
import SliderComponent from './SliderComponent';

class BottomComponent extends React.Component {
    
    render() {
        const alignmentClassName = this.props.left 
            ? 'bottom--left' 
            : 'bottom--right';
        
        const isLeft = this.props.left;
        return (
            <div className={`bottom ${alignmentClassName}`}>
                <div className='play-btn'>
                    <button onClick={() => this.props.toogleAction(this.props.left)}>
                        <FontAwesomeIcon size='3x' color="white" icon='play' />
                    </button>
                </div>
                <SliderComponent isLeft />
            </div>
        )
    }
};

const mapDispatchToProps = {
    toogleAction
};

export default connect(undefined, mapDispatchToProps) (BottomComponent);