import React from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransctionList from './components/TransctionList'
import AddTransection from './components/AddTransection'

const App = () => {
  return (
      <div>
          <Header />
          <div className='container'>
              <Balance />
              <IncomeExpense />
              <TransctionList />
              <AddTransection/>
          </div>
    </div>
  )
}

export default App
