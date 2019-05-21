import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Button from '../index';

describe('Button', () => {
  const props = {
    auid: 'testAUID',
  };

  it('always renders a button', () => {
    const wrapper = mount(<Button {...props} />);
    expect(wrapper).to.have.length(1);
  });

});
