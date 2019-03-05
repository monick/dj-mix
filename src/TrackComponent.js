import React from 'react';
import './TrackComponent.css';
import { connect } from 'react-redux';
import TrackCoverConnected from './TrackCover';
import { getTrack } from './Utils';

class TrackComponent extends React.Component {
    render() {
        const alignmentClassName = this.props.left 
            ? 'track--left' 
            : 'track--right';
        return (
            <div className={`track ${alignmentClassName}`}>
                <TrackCoverConnected isLeft={this.props.left} />
                <div className='track__info'>
                    <p>{this.props.author}</p>
                    <p>{this.props.title}</p>
                    <h1>{this.props.songLength}</h1>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    const track = getTrack(state, props.left);

    return {
        author: track.artist,
        title: track.title
    };
};
export default connect(mapStateToProps) (TrackComponent);