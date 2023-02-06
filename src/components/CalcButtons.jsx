import React from "react";
import "./CalcButtons.css";

function CalcButtons({ className, value, onClick }) {
  return (
    <button type="button" className={className} onClick={onClick} value={value}>
      {value}
    </button>
  );
}

export default CalcButtons;
