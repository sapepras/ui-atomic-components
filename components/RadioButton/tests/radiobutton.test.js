import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import radiobutton from '../index';

describe('/radiobutton/', () => {
  const props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<radiobutton {...props} />);
    }
    return MountedBtn;
  };

  it('always renders a radiobutton', () => {
    expect(ShallowBtn().find('radiobutton')).to.have.length(1);
  });
});
