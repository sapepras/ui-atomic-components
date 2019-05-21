import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Badge from '../index';

describe('Badge', () => {
  const props = {
    text: 'testText',
  };

  it('always renders a badge', () => {
    const wrapper = mount(<Badge {...props} />);
    expect(wrapper).to.have.length(1);
  });

});
