

function Payment({ lists, addPaymentToWallet, removePayment }) {
    return lists.map(({ id, amount, name, category, date, time, isFuture }, idx) => {
        return (
            <li key={id} className="payments__item">
                <div className="payments__date">
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
                <div className="payments__type">
                    <p>{ amount[0] === '+' ? 'Profit' : 'Expenditure' }</p>
                </div>
                <div className="payments__amount">
                    <p>{amount} UAH</p>
                    {isFuture && <ul className="payments__amount--buttonsContainer">
                        <li className="payments__amount--buttonItem">
                            <button className="payments__amount--btn add" onClick={()=>addPaymentToWallet(lists[idx])} type="button">+</button>
                        </li>
                        <li className="payments__amount--button">
                            <button className="payments__amount--btn remove" onClick={()=>removePayment(id)} type="button">-</button>
                        </li>
                    </ul>}
                </div>
                <div className="payments__name">
                    <p>{ name }</p>
                </div>
                <div className="payments__category">
                    <p>{ category }</p>
                </div>
            </li>
        )
    } )
}

export default Payment;