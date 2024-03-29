import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import input from '../index';

describe('Input', () => {
  const props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<input {...props} />);
    }
    return MountedBtn;
  };

  it('always renders a input field', () => {
    expect(ShallowBtn().find('input')).to.have.length(1);
  });
});
