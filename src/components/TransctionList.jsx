import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import '../App.css'
import Transection from './Transection.js'

const TransctionList = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction =>
                    <Transection key={transaction.id} transaction={transaction} />
                )}
            </ul>
        </>
    )
}

export default TransctionList
