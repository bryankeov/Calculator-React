import "./CalcButtons.css"

function CalcButtons({className, value, onClick}) {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  )
}

export default CalcButtons;