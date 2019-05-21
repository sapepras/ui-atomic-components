import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Modal from '../index';
import ModalContent from '../lib/ModalContent';

describe('Modal', () => {
  const props = {};

  it('always renders a modal if NOT isOpen', () => {
    const wrapper = mount(<Modal {...props} isOpen={false} />);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('renders ModalContent if isOpen', () => {
    const wrapper = mount(<Modal {...props} isOpen={true} />);
    expect(wrapper.find(ModalContent)).to.have.length(1);
  });

});
