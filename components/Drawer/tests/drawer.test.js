import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Drawer from '../index';

describe('Drawer', () => {

  const props = { title: 'Test Drawer', domid: 'testDomId' };

  it('has certain defaultProps', () => {

    const wrapper = mount(<Drawer {...props} />);
    const expectedDefaultProps = {
      isOpen: false,
      isCollapsible: true
    };
    expect(wrapper.props()).to.include(expectedDefaultProps);
  });

  it('always renders a div', () => {
    const wrapper = mount(<Drawer {...props} />);
    expect(wrapper.find('div[id="testDomId"]')).to.have.length(1);
  });

  describe('when children are passed', () => {

    const drawerChildren = <div id="testChildId">Some Children</div>;

    it('it renders children when isOpen', () => {
      const wrapper = mount(<Drawer {...props} isOpen={true} >{drawerChildren}</Drawer>);
      expect(wrapper.find('div[id="testChildId"]')).to.have.length(1);
    });

    it('it omits children when NOT isOpen', () => {
      const wrapper = mount(<Drawer {...props} isOpen={false} >{drawerChildren}</Drawer>);
      expect(wrapper.find('div[id="testChildId"]')).to.have.length(0);
    });

    it('it renders children when NOT isCollapsible', () => {
      const wrapper = mount(<Drawer {...props} isCollapsible={false} >{drawerChildren}</Drawer>);
      expect(wrapper.find('div[id="testChildId"]')).to.have.length(1);
    });

  });
});
