import React from 'react';
import Sum from './Sum';
import Buttons from './Buttons/Buttons';
import Modal from '../Modal/Modal';

export default function Wallet({modalOpen, showModal, handleSubmit, sum, type, futureCons, futureProfit}) {
    return (
        <div className='wallet'>
            {showModal && <Modal modalOpen={modalOpen} type={type} handleSubmit={handleSubmit} />}
            <Sum sum={sum} futureCons={futureCons} futureProfit={futureProfit} />
            <Buttons modalOpen={modalOpen} />
        </div>
    )
}