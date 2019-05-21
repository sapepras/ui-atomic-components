import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import EmailField from '../index';

describe('EmailField', () => {
  const props = {
    auid: 'testAUID',
    name: 'testName',
    id: 'testId',
    domainsList: [ 'academy.com' ],
  };

  it('always renders a EmailField', () => {
    const wrapper = mount(<EmailField {...props} />);
    expect(wrapper).to.have.length(1);
  });
});
