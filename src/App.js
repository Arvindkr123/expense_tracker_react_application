import React from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransctionList from './components/TransctionList'
import AddTransection from './components/AddTransection'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransctionList />
        <AddTransection />
      </div>
    </GlobalProvider>
  )
}

export default App
