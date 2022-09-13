import Payment from "./Payment";

export function PaymentsList({list}) {
    return (
        <ul className="payments__list">
            <Payment lists={list} />
        </ul>
    )
}