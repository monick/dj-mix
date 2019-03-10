import React from 'react';
import vinyl from './vinyl.svg';
import './DeckComponent.css';

export class DeckComponent extends React.Component {
    render() {
        const alignmentClassName = this.props.left 
            ? 'deck--left' 
            : 'deck--right';
        
        return (
            <div className={`deck ${alignmentClassName}`}>
                <img className="deck__image" src={vinyl}></img> 
            </div>
        )
    }
};