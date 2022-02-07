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
            <a href="https://devchallenges.io/portfolio/SarangWadode">SarangWadode</a>
            <span> - </span>
            <a href="https://devchallenges.io">devchallenges.io</a>
        </div>
    </div>;
}
