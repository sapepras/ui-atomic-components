import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import modal from '../index';

describe('/modal/', () => {
  const props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<modal {...props} />);
    }
    return MountedBtn;
  };

  it('always renders a modal', () => {
    expect(ShallowBtn().find('modal')).to.have.length(1);
  });
});
