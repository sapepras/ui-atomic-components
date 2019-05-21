import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import PasswordField from '../index';

describe('PasswordField', () => {
  const props = {
    auid: 'testAUID',
    name: 'testName',
    id: 'testId',
  };

  it('always renders a passwordfield', () => {
    const wrapper = mount(<PasswordField {...props} />);
    expect(wrapper).to.have.length(1);
  });

  it('renders input element', () => {
    const wrapper = mount(<PasswordField {...props} />);
    expect(wrapper).to.have.length(1);
    expect(wrapper.find('input[data-auid="testAUID"]')).to.have.length(1);
  });

  it('renders inline button', () => {
    const wrapper = mount(<PasswordField {...props} />);
    expect(wrapper).to.have.length(1);
    expect(wrapper.find('button[data-auid="testAUID_inline_button"]')).to.have.length(1);
  });

});
