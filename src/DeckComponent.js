import React from 'react';
import vinyl from './vinyl.svg';

export class DeckComponent extends React.Component {
    render() {
        const alignmentClassName = this.props.left 
            ? 'deck--left' 
            : 'deck--right';
        
        return (
            <div className={`deck ${alignmentClassName}`}>
                <img src={vinyl}></img> 
            </div>
        )
    }
};