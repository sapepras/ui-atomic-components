import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import Anchor from "../index";

describe("Anchor", () => {
  const props = {};
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
});
