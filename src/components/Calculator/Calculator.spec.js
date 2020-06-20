import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';


describe('Calculator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  it('should render a div', () => {
    const wrapper = shallow(<Calculator />);

    expect(wrapper.find('div.calculator-container').length).toEqual(1);
  });

  it('should contain the Display component', () => {
    expect(wrapper.containsMatchingElement(
      <Display displayValue={wrapper.instance().state.displayValue} />
    )).toEqual(true);
  });

  it('should contain the Keypad component', () => {
    expect(wrapper.containsMatchingElement(
      <Keypad
        callOperator={wrapper.instance().callOperator}
        numbers={wrapper.instance().state.numbers}
        operators={wrapper.instance().state.operators}
        setOperator={wrapper.instance().setOperator}
        updateDisplay={wrapper.instance().updateDisplay}
      />
    )).toEqual(true);
  });
});
