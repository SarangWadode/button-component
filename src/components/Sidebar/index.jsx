import React from 'react';
import './style.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="logo">
                <span className="dev">Dev</span>
                <span className="challenges">challenges.io</span>
            </div>
            <div className="pages">
                <ul>
                    <li className="page">Colors</li>
                    <li className="page">Typography</li>
                    <li className="page">Spaces</li>
                    <li className="page">Buttons</li>
                    <li className="page">Input</li>
                    <li className="page">Grid</li>
                </ul>
            </div>
        </div>
    );
}
