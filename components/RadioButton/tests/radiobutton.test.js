import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import RadioButton from '../index';

describe('RadioButton', () => {
  const props = {
    name: 'testName',
    id: 'testId',
    value: 'testValue',
  };

  it('always renders a RadioButton', () => {
    const wrapper = mount(<RadioButton {...props} />);
    expect(wrapper).to.have.length(1);
  });

});
