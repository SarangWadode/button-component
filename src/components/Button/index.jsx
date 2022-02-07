import React from 'react';
import './style.css'

export default function Button({ varient, disabled, disableShadow }) {
  return <>
    <button
      className={`
      ${(varient === 'outline' ? 'outline' :
          (varient === 'text' ?
            (disabled) ? 'text disabled' : 'text'
            : ''))
        } 
        ${(disableShadow) ? 'disableShadow' : ''}
        ${(disabled ? 'disabled' : '')}
      `}
      disabled={(disabled) ? 'disabled' : false}

    >
      Default
    </button>
  </>;
}
