import React from 'react';
import './SliderComponent.css';

export function Handle({
    handle: { id, value, percent }, 
    getHandleProps
  }) {
    return (
      <div 
        className='handler'
        style={{
          left: `${percent}%`,
          
        }}
        {...getHandleProps(id)}
      >
        <div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: -35 }}>
          {value}
        </div>
      </div>
    )
  }