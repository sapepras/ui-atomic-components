import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import link from '../index';

describe('/link/', () => {
  const props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<link {...props} />);
    }
    return MountedBtn;
  };

  it('always renders a link', () => {
    expect(ShallowBtn().find('link')).to.have.length(1);
  });
});
