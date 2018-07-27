import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Tooltip from '../index';

describe('Tooltip', () => {
  let props = {};
  let MountedTooltip;

  const ShallowTooltip = () => {
    if (!MountedTooltip) {
        MountedTooltip = mount(<Tooltip {...props} />);
    }
    return MountedTooltip;
  };

  it('always renders a div', () => {
    expect(ShallowTooltip().find('div')).to.have.length(1);
  });

  describe('when children are passed', () => {
    beforeEach(() => {
      props = {
        children: <div>Some Children</div>
      };
    });

    it('it renders the containing elements', () => {
      expect(ShallowTooltip().children()).to.have.length(1);
    });
  });
});
