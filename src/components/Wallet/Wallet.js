import React from 'react';
import Sum from './Sum';
import Buttons from './Buttons/Buttons';
import Modal from '../Modal/Modal';

export default function Wallet({modalOpen, showModal, handleSubmit, sum, type}) {
    return (
        <div className='wallet'>
            {showModal && <Modal modalOpen={modalOpen} type={type} handleSubmit={handleSubmit} />}
            <Sum sum={sum} />
            <Buttons modalOpen={modalOpen} />
        </div>
    )
}