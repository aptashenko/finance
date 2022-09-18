import './App.css';
import './Payments/payments.css';
import './Wallet/wallet.css';

import { PaymentsList } from './Payments/PaymentsList';
import Wallet from './Wallet/Wallet';
import React from 'react';
import dayjs from 'dayjs';

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
    const paymentIsFuture = dayjs(values.date).format('DD.MM.YYYY') > dayjs(new Date()).format('DD.MM.YYYY');
    if (values.type === 'Дохід') {
      values.amount = `+${values.amount}`
    } else {
      values.amount = `-${values.amount}`
    }

    !paymentIsFuture && this.setState(prevState => ({ sum: prevState.sum + Number(values.amount) }));

    values.isFuture = paymentIsFuture;
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
    
    this.setState(prevState => ({ payments: newPayments, sum: prevState.sum + Number(amount) }));
  }

  removePayment = (id) => {
    this.setState(prevState => ({
      payments: prevState.payments.filter(payment => payment.id !== id),
    }))
  }


  render() {
    const {sum, payments, showModal, paymentType} = this.state
    return (
      <div className='container'>
        <Wallet sum={sum} handleSubmit={this.handleSubmit} type={paymentType} showModal={showModal} modalOpen={this.toggleModal} />
        <PaymentsList payments={payments} addSum={this.addSum} removePay={this.removePayment} />
      </div>
    )
  }
}

export default App;
