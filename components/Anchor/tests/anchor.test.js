import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Anchor from '../index';

describe('Anchor', () => {
  const props = {
    auid: 'testAUID',
  };

  it('always renders a button', () => {
    const wrapper = mount(<Anchor {...props} />);
    expect(wrapper).to.have.length(1);
  });

});
