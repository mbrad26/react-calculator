import React, { Component } from 'react';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import './Calculator.css';

class Calculator extends Component {
  state = {
    displayValue: '0',
    numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'ce'],
    operators: ['/', 'x', '-', '+'],
    selectedOperator: '',
    storedValue: '',
  };

  callOperator = () => {
    console.log('call operation');
  }

  setOperator = value => {
    let { displayValue, selectedOperator, storedValue } = this.state;

    if (selectedOperator === '') {
      storedValue = displayValue;
      displayValue = '0';
      selectedOperator = value;
    } else {
      selectedOperator = value;
    }

    this.setState({ displayValue, selectedOperator, storedValue });
  };

  updateDisplay = (value) => {
    let { displayValue } = this.state;

    if (value === '.' && displayValue.includes('.')) value = '';

    if (value === 'ce') {
      displayValue = displayValue.substr(0, displayValue.length - 1);
      if (displayValue === '') displayValue = '0';
    } else {
      displayValue === '0' ? displayValue = value : displayValue += value;
    }

    this.setState({ displayValue });
  };

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
