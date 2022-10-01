function Sum({ sum, futureCons, futureProfit }) {
    const colors = {
        red: 'wallet_Sum--expenditure',
        green: 'wallet_Sum--profit',
    }
    const prettySum = (sum) => sum.toFixed(2).replace('.', ',');
    return (
        <>
            <h2 className={prettySum(sum)[0] === '-' ? colors.red : colors.green}><span className="title">Поточна касса: </span>{ sum ? prettySum(sum) : '0,00' } UAH</h2>
            <h2 className={prettySum(futureProfit)[0] === '-' ? colors.red : colors.green}><span className="title">Майбутні доходи: </span>{ futureProfit ? prettySum(futureProfit) : '0,00' } UAH</h2>
            <h2 className={prettySum(futureCons)[0] === '-' ? colors.red : colors.green}><span className="title">Майбутні витрати: </span>{ futureCons ? prettySum(futureCons) : '0,00' } UAH</h2>
        </>
    )
}

export default Sum;