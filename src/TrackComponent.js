import React from 'react';
import './TrackComponent.css';


export default class TrackComponent extends React.Component {
    render() {
        const alignmentClassName = this.props.left 
            ? 'left' 
            : 'right';
        return (
            <div className={`track ${alignmentClassName}`}>
                <p>{this.props.text}</p>
            </div>
        )
    }
}