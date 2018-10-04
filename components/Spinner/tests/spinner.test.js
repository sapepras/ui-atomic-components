import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import spinner from '../index';

describe('/spinner/', () => {
  const props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<spinner {...props} />);
    }
    return MountedBtn;
  };

  it('always renders a spinner', () => {
    expect(ShallowBtn().find('spinner')).to.have.length(1);
  });
});
