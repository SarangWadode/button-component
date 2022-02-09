import React from 'react';
import './style.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function Button({ varient, disabled, disableShadow, icon, size, color }) {
  function buttonSize(sz) {
    if (sz === 'sm') {
      return 'sm'
    } else if (sz === 'md') {
      return 'md'
    } else if (sz === 'lg') {
      return 'lg'
    } else {
      return ''
    }
  }

  function buttonColor(clr) {
    if (clr === 'default') {
      return 'default'
    } else if (clr === 'primary') {
      return 'primary'
    } else if (clr === 'secondary') {
      return 'secondary'
    } else if (clr === 'danger'){
      return 'danger'
    } else {
      return ''
    }
  }

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
        ${(icon) ? 'buttonIcon' : ''} 
        ${buttonSize(size)} 
        ${buttonColor(color)}
      `.trim()}
      disabled={(disabled) ? 'disabled' : false}
    >
      {(icon) ? <span className="icon">{(icon === 'start') ? <LocalGroceryStoreIcon style={{'color': '#fff','verticle-align': 'middle', 'font-size': '1em'}} /> : ''}</span>:''}
      <span>Default</span>
      {(icon) ? <span className="icon">{(icon === 'end') ? <LocalGroceryStoreIcon style={{'color': '#fff','verticle-align': 'middle', 'font-size': '1em'}} /> : ''}</span>:''}
    </button>
  </>;
}
