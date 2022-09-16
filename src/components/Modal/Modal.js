import React, { Component } from "react";
import './modal.css';
import Form from '../Wallet/Form/Form';


export default class Modal extends Component {

    render() {
        const { handleInput, formSubmitHandler, isProfitInput, handleCategory, handleManager } = this.props;
        return (
            <div className="modal__backdrop" onClick={this.props.close}>
                <div className="modal__content">
                    <Form isProfitInput={isProfitInput} handleCategory={handleCategory} handleManager={handleManager} submit={formSubmitHandler} input={handleInput} />
                </div>
            </div>
        )
    }
}