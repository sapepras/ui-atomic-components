import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import dropdown from '../index';

describe('/dropdown/', () => {
  const props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<dropdown {...props} />);
    }
    return MountedBtn;
  };

  it('always renders a dropdown', () => {
    expect(ShallowBtn().find('dropdown')).to.have.length(1);
  });
});
