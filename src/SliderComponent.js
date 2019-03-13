import React from 'react';
import './SliderComponent.css';
import { Slider } from 'react-compound-slider';

const railStyle = { //te style musza raczej byc inline do rail
    position: 'absolute',
    width: '100%',
    height: 10,
    marginTop: 35,
    borderRadius: 5,
    backgroundColor: '#8B9CB6',
  }

export class SliderComponent extends React.Component {
    
    render () {
        return ( 
            <Slider
                className='slider'
                domain={[0, 100]}
                values={[10]}
            >
           <div style={railStyle} /> 
            </Slider>
        )
    }
}