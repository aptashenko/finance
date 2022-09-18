import './App.css';
import './Payments/payments.css';
import './Wallet/wallet.css';

import { PaymentsList } from './Payments/PaymentsList';
import Wallet from './Wallet/Wallet';
import React from 'react';

class App extends React.Component {
  state = {
    payments: [],
    paymentType: '',
    sum: 0,
    showModal: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.payments !== this.state.payments) {
      this.addtoLocalStorage(this.state.payments, this.state.sum);
    }
  }

  componentDidMount() {
    const parsedPayments = JSON.parse(localStorage.getItem('payments'));
    const parsedSum = JSON.parse(localStorage.getItem('sum'));
    if (parsedPayments) {
      this.setState({ payments: parsedPayments });
    }
    if (parsedSum) {
      this.setState({ sum: parsedSum });
    }
  }

  toggleModal = (e) => {
    e.target === e.currentTarget && this.setState(prevState => ({
      showModal: !prevState.showModal,
      paymentType: e.target.classList.contains('plus') ? 'Дохід' : 'Витрата'
    }))
  }

  addtoLocalStorage = (payments, sum) => {
    localStorage.setItem('payments', JSON.stringify(payments));
    localStorage.setItem('sum', sum);
  }

  handleSubmit = (values, { resetForm }) => {
    this.setState(prevState => ({
      payments: [...prevState.payments, values],
      showModal: false,
    }))
    resetForm();
  }

  addSum = (amount, idx) => {
    this.setState(prevState => ({
      sum: prevState.sum + amount,
    }));
  }


  render() {
    const {sum, payments, showModal, paymentType} = this.state
    return (
      <div className='container'>
        <Wallet sum={sum} handleSubmit={this.handleSubmit} type={paymentType} showModal={showModal} modalOpen={this.toggleModal} />
        <PaymentsList payments={payments} addSum={this.addSum} />
      </div>
    )
  }
}

export default App;
