import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Button from '../index';

describe('Button', () => {
  const props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<Button {...props} />);
    }
    return MountedBtn;
  };

  it('always renders a button', () => {
    expect(ShallowBtn().find('button')).to.have.length(1);
  });

  // describe("the rendered button", () => {
  //   describe("when disable prop is set to true", () => {
  //     beforeEach(() => {
  //       props = {
  //         disabled: true
  //       };
  //     });

  //     it("displays the disabled button to be of grey color", () => {
  //       const btn = ShallowBtn().getDOMNode();
  //       expect(btn.css("color")).to.be("grey");
  //     });
  //   });
  // });
});
