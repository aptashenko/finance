function Sum({ sum }) {
    const colors = {
        red: 'wallet_Sum--expenditure',
        green: 'wallet_Sum--profit',
    }
    const prettySum = sum.toFixed(2).replace('.', ',');
    return (
        <h2 className={prettySum[0] === '-' ? colors.red : colors.green}>{ sum ? prettySum : '0,00' } UAH</h2>
    )
}

export default Sum;