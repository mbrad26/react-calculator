import React, { Component } from 'react';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import './Calculator.css';

class Calculator extends Component {
  state = {
    displayValue: '0',
    numbers: [],
    operators: [],
    selectedOperator: '',
    storedValue: '',
  };

  callOperator = () => {
    console.log('call operation');
  }

  setOperator = () => {
    console.log('set operation');
  }

  updateDisplay = () => {
    console.log('update display');
  }

  render() {
    const { displayValue } = this.state;

    return (
      <div className='calculator-container'>
        <Display displayValue={this.state.displayValue}/>
        <Keypad
          callOperator={this.callOperator}
          numbers={this.state.numbers}
          operators={this.state.operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;