import './Chart.css'
import ChartBar from './ChartBar'

function Chart({ dataPoints }) {
  const maxValue = Math.max(...dataPoints.map((dp) => dp.value))

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  )
}

export default Chart
