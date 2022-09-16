import Payment from "./Payment";

export function PaymentsList({ list, addPayment, removePayment }) {
    return (
        <ul className="payments__list">
            <li className="payments__header">
                <div className="payments__date">
                    <p>Date</p>
                </div>
                <div className="payments__type">
                    <p>Type</p>
                </div>
                <div className="payments__amount">
                    <p>Amount, UAH</p>
                </div>
                <div className="payments__name">
                    <p> Creator </p>
                </div>
                <div className="payments__category">
                    <p> Category </p>
                </div>
            </li>
            <Payment lists={list} addPaymentToWallet={addPayment} removePayment={removePayment} />
        </ul>
    )
}