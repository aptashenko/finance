import dayjs from "dayjs";

function Payment({ payments, addSum }) {

    return payments.map(({ id, amount, type, manager, category, date, isFuture }, idx) => {
        const payDate = dayjs(date).locale('uk').format('DD MMMM YYYY HH:mm:ss');
        const curDate = dayjs().format('DD MMMM YYYY HH:mm:ss');
        isFuture = payDate > curDate;


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
                            <button className="payments__amount--btn add" type="button" onClick={() => { addSum(amount, idx)}}>+</button>
                        </li>
                        <li className="payments__amount--button">
                            <button className="payments__amount--btn remove" type="button">-</button>
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