import dayjs from "dayjs";

function Payment({ payments, removePay, addSum }) {

    return payments.map(({ id, amount, type, manager, category, date, isFuture }, idx) => {
    const payDate = dayjs(date).format('DD.MM.YYYY | HH:mm:ss');

        return (
            <li key={id} className="payments__item">
                <div className="payments__date">
                    <p>{payDate}</p>
                </div>
                <div className="payments__type">
                    <p> {type} </p>
                </div>
                <div className="payments__amount">
                    <p>{amount} UAH</p>
                    {isFuture && <ul className="payments__amount--buttonsContainer">
                        <li className="payments__amount--buttonItem">
                            <button className="payments__amount--btn add" onClick={()=>addSum(amount, idx)} type="button">+</button>
                        </li>
                        <li className="payments__amount--button">
                            <button className="payments__amount--btn remove" onClick={()=>removePay(id)} type="button">-</button>
                        </li>
                    </ul>}
                </div>
                <div className="payments__name">
                    <p>{ manager }</p>
                </div>
                <div className="payments__category">
                    <p>{ category }</p>
                </div>
            </li>
        )
    } )
}

export default Payment;