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
                <div className="btn simple">
                    <div className="sample">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="sample">
                        < Title title="t" />
                        <Button />
                    </div>
                </div>

                <div className="btn outline">
                    <div className="sample">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="sample">
                        < Title title="t" />
                        <Button />
                    </div>
                </div>

                <div className="btn text">
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                </div>

                <div className="btn disabled-shadow">
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                </div>

                <div className="btn disabled">
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                </div>

                <div className="btn icons">
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                </div>

                <div className="btn size">
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                </div>

                <div className="btn color">
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                    <div className="">
                        < Title title="t" />
                        <Button />
                    </div>
                </div>

            </div>
            < Footer />
        </div>
    );
}
