import React from 'react';
import './style.css';

export default function Footer() {
    return <div className="footer">
        <div className="icon-url">
            <span>Icons: </span>
            <a href="https://material.io/resources/icons/?style=round">https://material.io/resources/icons/?style=round</a>
        </div>
        <div className="owner">
            <span>created by </span>
            <a href="https://devchallenges.io/portfolio/SarangWadode" title='Profile' >SarangWadode</a>
            <span> - </span>
            <a href="https://devchallenges.io" title="devchallenges" >devchallenges.io</a>
        </div>
    </div>;
}
