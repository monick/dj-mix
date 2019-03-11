import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BottomComponent.css';

export class BottomComponent extends React.Component {
    render() {
        const alignmentClassName = this.props.left 
            ? 'bottom--left' 
            : 'bottom--right';
        
        return (
            <div className={`bottom ${alignmentClassName}`}>
                <div className='play-btn'>
                    <button>
                        <FontAwesomeIcon size='3x' icon='play' />
                    </button>
                </div>
            </div>
        )
    }
};