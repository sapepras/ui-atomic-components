import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Tooltip from '../index';

describe('Tooltip', () => {
  const props = {};

  it('always renders a div', () => {
    const wrapper = mount(<Tooltip {...props} />);
    expect(wrapper.find('div')).to.have.length(1);
  });

  describe('when children are passed', () => {

    const tooltipChildren = <div id="testChildId">Some Children</div>;

    it('it renders the containing elements', () => {
      const wrapper = mount(<Tooltip {...props} >{tooltipChildren}</Tooltip>);
      expect(wrapper.find('div[id="testChildId"]')).to.have.length(1);
    });
  });

});
