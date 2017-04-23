import React from 'react'

const CalculatorButtons = () => {

  return (
    <div className="buttons-container">
      <div className="rest">
        <div className="advanced-functionality-btns">
          <button className="operator">^</button>
          <button className="operator">SQR</button>
          <button className="operator">1/x</button>
          <button className="operator">(</button>
          <button className="operator">)</button>
          <button className="operator">-x</button>
        </div>
        <div className="number-input-btns">
          <button className="number">0</button>
          <button className="number">00</button>
          <button className="number">.</button>
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
        </div>
      </div>
      <div className="basic-functionality-btns">
        <button className="operator">=</button>
        <button className="operator">+</button>
        <button className="operator">-</button>
        <button className="operator">*</button>
        <button className="operator">/</button>
        <button className="operator">AC</button>
      </div>
    </div>
  )
}

export default CalculatorButtons;