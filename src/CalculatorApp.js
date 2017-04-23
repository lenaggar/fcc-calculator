import React, { Component } from 'react'
import CalculatorButtons from './CalculatorButtons'
import './CalculatorApp.css'

class CalculatorApp extends Component {
  state = {
    display: '0'
  }

  render() {
    return (
      <div className="CalculatorApp">
        <div className="screen">
          <p>{ this.state.display }</p>
        </div>
        <CalculatorButtons />
      </div>
    )
  }
}

export default CalculatorApp;
