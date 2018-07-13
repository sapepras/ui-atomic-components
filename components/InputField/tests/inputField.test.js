import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import InputField from '../index';

describe('/InputField/', () => {
  const props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<InputField {...props} />);
    }
    return MountedBtn;
  };

  it('always renders a InputField', () => {
    expect(ShallowBtn().find('InputField')).to.have.length(1);
  });
});
