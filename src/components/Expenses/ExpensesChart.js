import React from 'react'
import Chart from '../Chart/Chart'

function ExpensesChart({ expenses }) {
  const dataPoints = Array(12)
    .fill()
    .map((_, i) => {
      return {
        value: 0,
        label: Intl.DateTimeFormat('en', { month: 'short' }).format(new Date((i + 1).toString())),
      }
    })

  expenses.forEach((expense) => (dataPoints[expense.date.getMonth()].value += expense.amount))

  return (
    <div>
      <Chart dataPoints={dataPoints} />
    </div>
  )
}

export default ExpensesChart
