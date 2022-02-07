import React from 'react';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import './style.css';

export default function index() {
    return (
        <div className="wrapper">
            <h1>Buttons</h1>

            <div className="buttons">
                <div className="btns simple">
                    <div className="btn">
                        < Title title="<Button />" />
                        <Button />
                    </div>
                </div>

                <div className="btns outline">
                    <div className="btn">
                        < Title title="<Button varient='outline' />" />
                        <Button />
                    </div>
                </div>

                <div className="btns text">
                    <div className="btn">
                        < Title title="<Button varient='text' />" />
                        <Button />
                    </div>
                </div>

                <div className="btns disabled-shadow">
                    <div className="btn">
                        < Title title="<Button disableShadow />" />
                        <Button />
                    </div>
                </div>

                <div className="btns disabled">
                    <div className="btn">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="btn">
                        < Title title="t" />
                        <Button />
                    </div>
                </div>

                <div className="btns icons">
                    <div className="btn">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="btn">
                        < Title title="t" />
                        <Button />
                    </div>
                </div>

                <div className="btns size">
                    <div className="btn">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="btn">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="btn">
                        < Title title="t" />
                        <Button />
                    </div>
                </div>

                <div className="btns color">
                    <div className="btn">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="btn">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="btn">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="btn">
                        < Title title="t" />
                        <Button />
                    </div>
                </div>

            </div>
            < Footer />
        </div>
    );
}
