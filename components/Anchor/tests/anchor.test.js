import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import Anchor from "../index";

describe("Anchor", () => {
  let props = {};
  let MountedAnchor;

  const ShallowBtn = () => {
    if (!MountedAnchor) {
      MountedAnchor = mount(<Anchor {...props} />);
    }
    return MountedAnchor;
  };

  it("always renders an a tag", () => {
    expect(ShallowBtn().find("a")).to.have.length(1);
  });

  describe("the rendered a tag", () => {
    describe("when disable prop is set to true", () => {
      beforeEach(() => {
        props = {
          disabled: true
        };
      });

      it("displays the disabled button to be of grey color", () => {
        const btn = ShallowBtn().getDOMNode();
        expect(btn.css("color")).to.be("grey");
      });
    });
  });
});
