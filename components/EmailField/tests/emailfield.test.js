import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import emailfield from '../index';

describe('/emailfield/', () => {
  const props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<emailfield {...props} />);
    }
    return MountedBtn;
  };

  it('always renders a emailfield', () => {
    expect(ShallowBtn().find('emailfield')).to.have.length(1);
  });
});
