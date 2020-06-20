import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';


describe('Calculator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  it('should render a div', () => {
    const wrapper = shallow(<Calculator />);

    expect(wrapper.find('div.calculator-container').length).toEqual(1);
  });
});
