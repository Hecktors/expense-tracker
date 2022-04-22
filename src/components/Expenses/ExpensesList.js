import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

function ExpensesList({ expenses }) {
  let expensesContent = <p className='expenses-list__fallback'>No expenses found.</p>

  if (expenses.length === 0) {
    return expensesContent
  }

  return (
    <ul className='expenses-list'>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  )
}

export default ExpensesList
