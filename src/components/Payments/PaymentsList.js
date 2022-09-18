import Payment from "./Payment";

export function PaymentsList({ payments, addSum }) {
    return (
        <ul className="payments__list">
            <li className="payments__header">
                <div className="payments__date">
                    <p>Дата надходження</p>
                </div>
                <div className="payments__type">
                    <p>Тип платежу</p>
                </div>
                <div className="payments__amount">
                    <p>Сума, UAH</p>
                </div>
                <div className="payments__name">
                    <p> Відповідальний </p>
                </div>
                <div className="payments__category">
                    <p> Категорія </p>
                </div>
            </li>
            <Payment payments={payments} addSum={addSum} />
        </ul>
    )
}