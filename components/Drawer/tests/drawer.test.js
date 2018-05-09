import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import Drawer from "../index";

describe("Drawer", () => {
  let props = {};
  let MountedDrawer;

  const ShallowDrawer = () => {
    if (!MountedDrawer) {
      MountedDrawer = mount(<Drawer {...props} />);
    }
    return MountedDrawer;
  };

  it("always renders a div", () => {
    expect(ShallowDrawer().find("div")).to.have.length.above(1);
  });

  describe("when children are passed", () => {
    beforeEach(() => {
      props = {
        children: <div>Some Children</div>
      };
    });

    it("it renders the containing elements", () => {
      expect(ShallowDrawer().children()).to.have.length(1);
    });
  });
});
