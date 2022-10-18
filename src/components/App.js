import './App.css';
import './Payments/payments.css';
import './Wallet/wallet.css';
import './Search/search.css';

import { PaymentsList } from './Payments/PaymentsList';
import Wallet from './Wallet/Wallet';
import Search from './Search/Search';
import React from 'react';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { manageData, fetchData } from '../services/API';

export default function App() {
    const [payments, setPayments] = useState([]);
    const [paymentType, setPaymentType] = useState('');
    const [sum, setSum] = useState(0);
    const [futureProfit, setFutureProfit] = useState(0);
    const [futureCons, setFutureCons] = useState(0);
    const [showModal, setShowModal] = useState(false);


  const handleSubmit = (values, { resetForm }) => {
    let { type, amount, date } = values;
    const paymentIsFuture = dayjs(date).format() > dayjs(new Date()).format();
    values.amount = type === 'Дохід' ? `+${amount}` : `-${amount}`;
    if (!paymentIsFuture) {
        setSum(s => s + Number(amount))
    } else if (paymentIsFuture && type === 'Дохід') {
        setFutureProfit(s => s + Number(amount))
    } else if (paymentIsFuture && type === 'Витрата') {
        setFutureCons(s => s + Number(amount));
    }
    values.isFuture = paymentIsFuture;
    manageData('https://63376a2b132b46ee0be13d1f.mockapi.io/api/v1/payments', values, 'POST')
    setPayments(s => [...s, values]);
    setShowModal(false);
    console.log(values)
    resetForm();
  }
    
  const toggleModal = ({target, currentTarget}) => {
      if (target === currentTarget) {
          setShowModal(s => !s);
          setPaymentType(target.classList.contains('plus') ? 'Дохід' : 'Витрата');
      }
  }

  const addSum = (amount, index) => {
      const newPayments = payments;
      const selectedPayment = newPayments[index];
      selectedPayment.isFuture = false;
      manageData(`https://63376a2b132b46ee0be13d1f.mockapi.io/api/v1/payments/${selectedPayment.id}`, selectedPayment, 'PUT');
      setPayments(newPayments);
      setSum(s => s + Number(amount));
      setFutureProfit(s => s - Number(amount))
  }

  const removePayment = (selectedId) => {
      manageData(`https://63376a2b132b46ee0be13d1f.mockapi.io/api/v1/payments/${selectedId}`, null, 'DELETE');
      setPayments(s => s.filter(({id}) => id !== selectedId))
    }
    
  useEffect(() => {
    const data = fetchData('https://63376a2b132b46ee0be13d1f.mockapi.io/api/v1/payments');
    data.then(newPayments => {
      setPayments(newPayments);
      for (let {isFuture, amount, type} of newPayments) {
        if (!isFuture) {
            setSum(s => s + Number(amount));
        }
        if (isFuture && type === 'Дохід') {
            setFutureProfit(s => s + Number(amount));
        }
        if (isFuture && type === 'Витрата') {
            setFutureCons(s => s + Number(amount));
      }
    }
    })
  }, [])
  

  return (
    <div className='container'>
      <div className='header'>
        <Search />
      </div>
      <div className='body'>
        <Wallet sum={sum} futureProfit={futureProfit} futureCons={futureCons} handleSubmit={handleSubmit} type={paymentType} showModal={showModal} modalOpen={toggleModal} />
        <PaymentsList payments={payments} addSum={addSum} removePay={removePayment} />
      </div>
    </div>
  )
}
