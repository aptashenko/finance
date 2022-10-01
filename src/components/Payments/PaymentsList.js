import Payment from "./Payment";

export function PaymentsList({ payments, addSum, removePay }) {
    return (
        <div className="payments__list">
            <ul className="payments__header">
                <li className="payments__date">
                    <p>Дата надходження</p>
                </li>
                <li className="payments__type">
                    <p>Тип платежу</p>
                </li>
                <li className="payments__amount">
                    <p>Сума, UAH</p>
                </li>
                <li className="payments__name">
                    <p> Відповідальний </p>
                </li>
                <li className="payments__category">
                    <p> Категорія </p>
                </li>
                <li className="payments__comment">
                    <p> Коментар </p>
                </li>
            </ul>
            <Payment payments={payments} addSum={addSum} removePay={removePay} />
        </div>
    )
}