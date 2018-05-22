import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import Button from "../index";

describe("Button", () => {
  const props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<Button {...props} />);
    }
    return MountedBtn;
  };

  it("always renders a button", () => {
    expect(ShallowBtn().find("button")).to.have.length(1);
  });
});
