import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Spinner from '../index';

describe('Spinner', () => {
  const props = {};

  it('always renders a spinner', () => {
    const wrapper = mount(<Spinner {...props} />);
    expect(wrapper).to.have.length(1);
  });

});
