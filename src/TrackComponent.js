import React from 'react';
import './TrackComponent.css';
import music from './music.png'

const TrackCover = () => (
    <div className='track__cover'>
        <img src={music}></img>
    </div>
);

export default class TrackComponent extends React.Component {
    render() {
        const alignmentClassName = this.props.left 
            ? 'track--left' 
            : 'track--right';
        return (
            <div className={`track ${alignmentClassName}`}>
                <TrackCover />
                <div className='track__info'>
                    <p>{this.props.author}</p>
                    <p>{this.props.title}</p>
                    <h1>{this.props.songLength}</h1>
                </div>
            </div>
        )
    }
}