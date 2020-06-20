import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';


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
});
