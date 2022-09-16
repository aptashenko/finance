import './App.css';
import './Payments/payments.css';
import './Wallet/wallet.css';

import { PaymentsList } from './Payments/PaymentsList';
import { Wallet } from './Wallet/Wallet';
import React from 'react';

class App extends React.Component {
  state = {
    payments: [],
    sum: 0,
    showModal: false,
    isPofitInput: false,
  };

  componentWillMount() {
    const parsedLocalPayments = JSON.parse(localStorage.getItem('payments'));
    const sumNumber = Number(localStorage.sum);
    if (parsedLocalPayments) {
        this.setState(prevState => ({
          payments: prevState.payments.concat(parsedLocalPayments),
          sum: sumNumber,
        }))
    }
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  toggleModal = (e) => {
    const plusButton = e.target.classList.contains('plus');
    const minusButton = e.target.classList.contains('minus');
    e.target === e.currentTarget && this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
    plusButton && this.setState({
      isPofitInput: true,
    })
    minusButton && this.setState({
      isPofitInput: false,
    })
  }

  addtoLocalStorage = (payments, sum) => {
    localStorage.setItem('payments', JSON.stringify(payments));
    localStorage.setItem('sum', sum);
  }

  addToSum = (data) => {
    !data.isFuture && this.setState(prevState => ({ sum: prevState.sum + Number(data.amount) }))
  }

  addPaymentToWallet = (data) => {
    data.isFuture = !data.isFuture;
    this.setState(prevState => ({
      sum: prevState.sum + Number(data.amount),
    }))
    setTimeout(() => {
      this.addtoLocalStorage(this.state.payments, this.state.sum);
    })
  }

  removePayment = (id) => {
    this.setState(prevState => ({
      payments: prevState.payments.filter(payment => payment.id !== id)
    }));
    setTimeout(() => {
      this.addtoLocalStorage(this.state.payments, this.state.sum);
    })
  }

  addPayment = data => {
    this.setState(prevState => ({
      payments: [data, ...prevState.payments]
    }));
    this.addToSum(data);
    setTimeout(() => {
      this.addtoLocalStorage(this.state.payments, this.state.sum);
    })
  }

  render() {
    const { payments, sum, showModal, isPofitInput } = this.state;
    return (
      <div className='container'>
        <Wallet onSubmit={this.addPayment} closeModal={this.closeModal} isProfitInput={isPofitInput} sum={sum} showModal={showModal} modal={this.toggleModal} />
        <PaymentsList list={payments} addPayment={this.addPaymentToWallet} removePayment={this.removePayment} />
      </div>
    )
  }
}

export default App;
