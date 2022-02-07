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
                        <Button varient='outline' />
                    </div>
                </div>

                <div className="btns text">
                    <div className="btn">
                        < Title title="<Button varient='text' />" />
                        <Button varient='text' />
                    </div>
                </div>

                <div className="btns disabled-shadow">
                    <div className="btn">
                        < Title title="<Button disableShadow />" />
                        <Button disableShadow='disableShadow' />
                    </div>
                </div>

                <div className="btns disabled">
                    <div className="btn">
                        < Title title="<Button disabled />" />
                        <Button disabled />
                    </div>
                    <div className="btn">
                        < Title title="<Button varient='text' disabled />" />
                        <Button varient='text' disabled />
                    </div>
                </div>

                <div className="btns-icons">
                    <div className="btn">
                        < Title title="<Button startIcon='local_grocery_store' />" />
                        <Button icon='start' />
                    </div>
                    <div className="btn">
                        < Title title="<Button endIcon='local_grocery_store' />" />
                        <Button icon='end' />
                    </div>
                </div>

                <div className="btns size">
                    <div className="btn">
                        < Title title="<Button size='sm' />" />
                        <Button size='sm' />
                    </div>
                    <div className="btn">
                        < Title title="<Button size='md' />" />
                        <Button size='md' />
                    </div>
                    <div className="btn">
                        < Title title="<Button size='lg' />" />
                        <Button size='lg' />
                    </div>
                </div>

                <div className="btns color">
                    <div className="btn">
                        < Title title="<Button color='default' />" />
                        <Button color='default' />
                    </div>
                    <div className="btn">
                        < Title title="<Button color='primary' />" />
                        <Button color='primary' />
                    </div>
                    <div className="btn">
                        < Title title="<Button color='secondary' />" />
                        <Button color='secondary' />
                    </div>
                    <div className="btn">
                        < Title title="<Button color='danger' />" />
                        <Button color='danger' />
                    </div>
                </div>

            </div>
            < Footer />
        </div>
    );
}
