import style from "./transStyles.module.css"

function Payment({ type, amount, currency }) {
    return (
        <tr className={style.record}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
}



function TransactionHistory({ items }) {


    return (
        <table className={style.transactions}>
            <thead>
                <tr className={style.head}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(record =>
                    <Payment
                        type={record.type}
                        amount={record.amount}
                        currency={record.currency}
                        key={record.id}
                    />)}
            </tbody>
        </table>
    );
}

export default TransactionHistory;