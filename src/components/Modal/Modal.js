import React, { Component } from "react";
import './modal.css';
import Form from '../Wallet/Form';


export default class Modal extends Component {

    render() {
        const { handleInput, formSubmitHandler } = this.props;
        return (
            <div className="modal__backdrop" onClick={this.props.close}>
                <div className="modal__content">
                    <Form submit={formSubmitHandler} input={handleInput} />
                </div>
            </div>
        )
    }
}