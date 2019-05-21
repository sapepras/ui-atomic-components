import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import InputField from '../index';

describe('InputField', () => {
  const props = {
    auid: 'testAUID',
    name: 'testName',
    id: 'testId',
  };

  it('always renders a InputField', () => {
    const wrapper = mount(<InputField {...props} />);
    expect(wrapper).to.have.length(1);
  });

  it('renders input element', () => {
    const wrapper = mount(<InputField {...props} />);
    expect(wrapper).to.have.length(1);
    expect(wrapper.find('input[data-auid="testAUID"]')).to.have.length(1);
  });

});
