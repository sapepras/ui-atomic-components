import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Checkbox from '../index';

describe('Atomic Checkbox Component', () => {
  it('renders a checkbox', () => {
    const wrapper = mount(<Checkbox name="test-checkbox" id="test-check" onChange={() => {}} />);
    expect(wrapper.find('input')).to.have.length(1);
  });
});
