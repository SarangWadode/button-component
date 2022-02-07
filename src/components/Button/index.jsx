import React from 'react';
import './style.css'

export default function Button( {varient} ) {
  return <>
    <button 
    className={(varient === 'outline' ? 'outline': (varient === 'text'? 'text': ''))}>
      Default
    </button>
  </>;
}
