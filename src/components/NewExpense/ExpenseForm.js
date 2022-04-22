import { useState } from 'react'
import './ExpenseForm.css'

const initInputValue = {
  id: '',
  title: '',
  amount: '',
  date: new Date(Date.now()),
}

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState(initInputValue)
  const mSecOfDay = 24 * 60 * 60 * 1000
  const dayAhead = 90
  const timeAhead = dayAhead * mSecOfDay
  const submitHandler = (e) => {
    e.preventDefault()
    props.onSaveExpenseData(userInput)
    setUserInput(initInputValue)
    props.onCancelForm()
  }

  const changeHandler = (e) => {
    const value = e.target.name !== 'date' ? e.target.value : new Date(e.target.value)
    setUserInput((prevState) => ({ ...prevState, [e.target.name]: value }))
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input onChange={changeHandler} type='text' value={userInput.title} name='title' />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            onChange={changeHandler}
            type='number'
            id='num-id'
            name='amount'
            value={userInput.amount}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            onChange={changeHandler}
            type='date'
            name='date'
            value={userInput.date.toISOString().split('T')[0]}
            min='2019-01-01'
            max={new Date(Date.now() + timeAhead).toISOString().split('T')[0]}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancelForm}>
          Cancel
        </button>
        <button>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
