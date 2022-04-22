import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState(new Date(Date.now()).getFullYear().toString())
  const filteredExpenses = expenses.filter(
    (expense) => filteredYear === expense.date.getFullYear().toString()
  )

  const filterExpensesHandler = (year) => {
    setFilteredYear(year)
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={filteredYear} onFilterExpenses={filterExpensesHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses
