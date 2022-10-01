import './App.css';
import './Payments/payments.css';
import './Wallet/wallet.css';
import './Search/search.css';

import { PaymentsList } from './Payments/PaymentsList';
import Wallet from './Wallet/Wallet';
import Search from './Search/Search';
import React from 'react';
import dayjs from 'dayjs';

class App extends React.Component {
  state = {
    payments: [],
    paymentType: '',
    sum: 0,
    futureProfit: 0,
    futureCons: 0,
    showModal: false,
  };

  async componentDidMount() {
    const data = await this.fetchData('https://63376a2b132b46ee0be13d1f.mockapi.io/api/v1/payments');
    this.setState(({
      payments: data,
    }))
    for (let pay of this.state.payments) {
      if (!pay.isFuture) {
        this.setState(prevState => ({
          sum: prevState.sum + Number(pay.amount),
        }))
      }
      if (pay.isFuture && pay.type === 'Дохід') {
        this.setState(prevState => ({
          futureProfit: prevState.futureProfit + Number(pay.amount),
        }))
      }
      if (pay.isFuture && pay.type === 'Витрата') {
        this.setState(prevState => ({
          futureCons: prevState.futureCons + Number(pay.amount),
        }))
      }
      }
  }

  fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  putNewData = (url, data, method) => {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    fetch(url, options);
  }

  removeData = (url) => {
    fetch(url, {
      method: 'DELETE',
    })
  }

  toggleModal = (e) => {
    e.target === e.currentTarget && this.setState(prevState => ({
      showModal: !prevState.showModal,
      paymentType: e.target.classList.contains('plus') ? 'Дохід' : 'Витрата'
    }))
  }

  handleSubmit = (values, { resetForm }) => {

    const paymentIsFuture = dayjs(values.date).format() > dayjs(new Date()).format();
    if (values.type === 'Дохід') {
      values.amount = `+${values.amount}`
    } else {
      values.amount = `-${values.amount}`
    }
    if (!paymentIsFuture) {
      this.setState(prevState => ({ sum: prevState.sum + Number(values.amount) }));
    } else if (paymentIsFuture && values.type === 'Дохід') {
      this.setState(prevState => ({ futureProfit: prevState.futureProfit + Number(values.amount) }));
    } else if (paymentIsFuture && values.type === 'Витрата') {
      this.setState(prevState => ({ futureCons: prevState.futureCons + Number(values.amount) }));
    }
    values.isFuture = paymentIsFuture;
    this.putNewData('https://63376a2b132b46ee0be13d1f.mockapi.io/api/v1/payments', values, 'POST')
  
    this.setState(prevState => ({
      payments: [...prevState.payments, values],
      showModal: false,
    }))
    resetForm();
  }

  addSum = (amount, index) => {
    const newPayments = this.state.payments;
    const selectedPayment = newPayments[index];
    selectedPayment.isFuture = false;
    this.putNewData(`https://63376a2b132b46ee0be13d1f.mockapi.io/api/v1/payments/${selectedPayment.id}`, selectedPayment, 'PUT');
    this.setState(prevState => ({
      payments: newPayments,
      sum: prevState.sum + Number(amount),
      futureProfit: prevState.futureProfit - Number(amount),
    }));
  }

  removePayment = (id) => {
    this.removeData(`https://63376a2b132b46ee0be13d1f.mockapi.io/api/v1/payments/${id}`);
    this.setState(prevState => ({
      payments: prevState.payments.filter(payment => payment.id !== id),
    }))
  }


  render() {
    const {sum, payments, showModal, paymentType, futureProfit, futureCons} = this.state
    return (
      <div className='container'>
        <div className='header'>
          <Search />
        </div>
        <div className='body'>
          <Wallet sum={sum} futureProfit={futureProfit} futureCons={futureCons} handleSubmit={this.handleSubmit} type={paymentType} showModal={showModal} modalOpen={this.toggleModal} />
          <PaymentsList payments={payments} addSum={this.addSum} removePay={this.removePayment} />
        </div>
      </div>
    )
  }
}

export default App;
