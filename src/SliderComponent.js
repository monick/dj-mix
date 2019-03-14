import React from 'react';
import './SliderComponent.css';
import { Slider, Handles } from 'react-compound-slider';
import { Handle } from './HandleSliderComponent';
import { toogleVolume } from './actions/trackActions';
import { connect } from 'react-redux';

class SliderComponent extends React.Component {
    render () {
        return ( 
            <Slider
                className='slider'
                domain={[0, 1]}
                values={[1]}
                step={0.01}
                onChange={(values) => this.props.toogleVolume(this.props.isLeft, values)}
            >
                <div className='railStyle' /> 
                <Handles>
                {({ handles, getHandleProps }) => (
                    <div className="slider-handles">
                        {handles.map(handle => (
                            <Handle
                                key={handle.id}
                                handle={handle}
                                getHandleProps={getHandleProps}
                            />
                        ))}
                    </div>
                )}
                </Handles>
            </Slider>
        )
    }
}

const mapDispatchToProps = {
    toogleVolume
};

export default connect(undefined, mapDispatchToProps) (SliderComponent);