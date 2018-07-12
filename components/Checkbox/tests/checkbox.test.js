import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import checkbox from '../index';

describe('/checkbox/', () => {
  const props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<checkbox {...props} />);
    }
    return MountedBtn;
  };

  it('always renders a checkbox', () => {
    expect(ShallowBtn().find('checkbox')).to.have.length(1);
  });
});
