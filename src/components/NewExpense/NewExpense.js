import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
  const [formIsOpen, setFormIsOpen] = useState(false)
  const toggleFormHandler = () => setFormIsOpen((prevState) => !prevState)

  const saveExpenseData = (enteredData) => {
    const newExpense = { ...enteredData, amount: +enteredData.amount, id: Date.now() }
    props.onAddExpense(newExpense)
  }

  return (
    <div className='new-expense'>
      {formIsOpen && (
        <ExpenseForm onSaveExpenseData={saveExpenseData} onCancelForm={toggleFormHandler} />
      )}
      {!formIsOpen && <button onClick={toggleFormHandler}>Add New Expense</button>}
    </div>
  )
}

export default NewExpense
