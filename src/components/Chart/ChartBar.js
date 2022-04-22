import './ChartBar.css'

function ChartBar({ value, label, maxValue }) {
  const fillHeight = (value / maxValue) * 100 + '%'

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ height: fillHeight }} />
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  )
}

export default ChartBar
