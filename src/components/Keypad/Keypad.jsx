import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Keypad = (
  { callOperator, numbers, operators, setOperator, updateDisplay }
) => {
  const numberKeys = numbers.map(number => <p key={number}>{number}</p>);
  const operatorKey = operators.map(operator => <p key={operator}>{operator}</p>);

  return (
    <div className='keypad-container'>
      <div className='numbers-container'>
        {numberKeys}
      </div>
      <div className='operators-container'>
        {operatorKey}
      </div>
    </div>
  );
}

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
}

export default Keypad;
