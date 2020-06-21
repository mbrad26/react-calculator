import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';


describe('Calculator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a div', () => {
    const wrapper = shallow(<Calculator />);

    expect(wrapper.find('div').length).toEqual(1);
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

describe('mounted Calculator', () => {
  let wrapper;

  beforeEach(() => wrapper = mount(<Calculator />));

  it('calls updateDisplay when a number key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateDisplay');
    wrapper.instance().forceUpdate();

    expect(spy).toHaveBeenCalledTimes(0);

    wrapper.find('.number-key').first().simulate('click');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls setOperator when an operator key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'setOperator');
    wrapper.instance().forceUpdate();

    expect(spy).toHaveBeenCalledTimes(0);

    wrapper.find('.operator-key').first().simulate('click');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls callOperator when the submit key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'callOperator');
    wrapper.instance().forceUpdate();

    expect(spy).toHaveBeenCalledTimes(0);

    wrapper.find('.submit-key').first().simulate('click');

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
