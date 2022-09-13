import './App.css';
import './Payments/payments.css';
import './Wallet/wallet.css';
import payments from '../data/paymentsData.json';

import { PaymentsList } from './Payments/PaymentsList';
import { Wallet } from './Wallet/Wallet';
import React from 'react';

class App extends React.Component {
  state = {
    payments,
    sum: 0,
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

  addtoLocalStorage = (payments, sum) => {
    localStorage.setItem('payments', JSON.stringify(payments));
    localStorage.setItem('sum', sum);
  }

  addToSum = (data) => {
    this.setState(prevState => ({
        sum: prevState.sum + Number(data.amount),
      }))
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
    const { payments, sum } = this.state;
    return (
      <div className='container'>
        <Wallet onSubmit={this.addPayment} sum={sum} />
        <PaymentsList list={payments} />
      </div>
    )
  }
}

export default App;
