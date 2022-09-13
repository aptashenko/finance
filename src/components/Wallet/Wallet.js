import React, { Component } from 'react';
import dayjs from 'dayjs'
import shortid from 'shortid';
import Form from './Form';
import Sum from './Sum';

export class Wallet extends Component {
    state = {
        id: null,
        amount: '',
        name: 'Artem Ptashenko',
        category: 'Salary',
        date: '',
        time: '',
    };

    setCurrentTime = () => {
        const currentDate = dayjs().locale('uk').format('DD MMMM YYYY');
        const currentTime = dayjs().locale('uk').format('HH:mm:ss');
        this.setState({ date: currentDate, time: currentTime });
    }
    
    handleInput = e => {
        e.currentTarget.classList.contains('plus') ? this.setState({ amount: `+${e.target.value}`, id: shortid.generate() }) : this.setState({ amount: `-${e.target.value}`, id: shortid.generate() });
    };

    formSubmitHandler = (e) => {
        e.preventDefault();
        this.setCurrentTime();
        setTimeout(() => {
            this.props.onSubmit(this.state)
        }, 100)
        e.target.reset();
    }

    render() {
        return (
            <div className='wallet'>
                <Sum sum={this.props.sum} />
                <Form submit={this.formSubmitHandler} input={this.handleInput} />
            </div>
        )
    }
}