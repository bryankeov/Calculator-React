import "./CalcDisplay.css"

function CalcDisplay({value}) {
  return (
    <div className="display-container">
      <div>{value}</div>
    </div>
  )
}

export default CalcDisplay