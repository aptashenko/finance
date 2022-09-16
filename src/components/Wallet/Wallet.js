import React, { Component } from 'react';
import dayjs from 'dayjs'
import shortid from 'shortid';
import Sum from './Sum';
import Buttons from './Buttons/Buttons';
import Modal from '../Modal/Modal';

export class Wallet extends Component {
    state = {
        id: null,
        amount: '',
        name: '',
        category: '',
        date: '',
        time: '',
        isFuture: null,
    };

    setCurrentTime = () => {
        const currentDate = dayjs().locale('uk').format('DD MMMM YYYY');
        const currentTime = dayjs().locale('uk').format('HH:mm:ss');
        this.setState({ date: currentDate, time: currentTime });
    }
    
    handleInput = e => {
        e.currentTarget.classList.contains('plus') ? this.setState({ amount: `+${e.target.value}`, id: shortid.generate() }) : this.setState({ amount: `-${e.target.value}`, id: shortid.generate() });
    };

    handleCategory = val => {
        this.setState({category: val.label})
    }

    handleManager = val => {
        this.setState({name: val.label})
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        this.setCurrentTime();
        this.setState({ isFuture: true });
        setTimeout(() => {
            this.props.onSubmit(this.state)
        }, 100)
        e.target.reset();
        this.props.closeModal();
    }

    render() {
        const { showModal, modal, isProfitInput } = this.props;
        return (
            <div className='wallet'>
                {showModal && <Modal close={modal} handleManager={this.handleManager} handleCategory={this.handleCategory} isProfitInput={isProfitInput} handleInput={this.handleInput} formSubmitHandler={this.formSubmitHandler} />}
                <Sum sum={this.props.sum} />
                <Buttons modal={this.props.modal} />
            </div>
        )
    }
}