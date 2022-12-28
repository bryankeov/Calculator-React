import "./CalcDisplay.css"

function CalcDisplay(props) {
  return (
    <div className="display-container">
      <div>{props.value}</div>
    </div>
  )
}

export default CalcDisplay