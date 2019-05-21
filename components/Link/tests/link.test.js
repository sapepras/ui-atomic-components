import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Link from '../index';

describe('Link', () => {
  const props = {};

  it('always renders a Link', () => {
    const wrapper = mount(<Link {...props} />);
    expect(wrapper).to.have.length(1);
  });

});
