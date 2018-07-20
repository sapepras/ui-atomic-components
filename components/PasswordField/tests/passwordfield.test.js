import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import passwordfield from '../index';

describe('/passwordfield/', () => {
  const props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<passwordfield {...props} />);
    }
    return MountedBtn;
  };

  it('always renders a passwordfield', () => {
    expect(ShallowBtn().find('passwordfield')).to.have.length(1);
  });
});

