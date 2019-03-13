import React from 'react';
import './SliderComponent.css';
import { Slider, Handles } from 'react-compound-slider';
import { Handle } from './HandleSliderComponent';

export class SliderComponent extends React.Component {
    render () {
        return ( 
            <Slider
                className='slider'
                domain={[0, 100]}
                values={[10]}
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