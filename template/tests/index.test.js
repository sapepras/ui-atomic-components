import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import ##_COMP_NAME_## from "../index";

describe("/##_COMP_NAME_##/", () => {
  let props = {};
  let MountedBtn;

  const ShallowBtn = () => {
    if (!MountedBtn) {
      MountedBtn = mount(<##_COMP_NAME_## {...props} />);
    }
    return MountedBtn;
  };

  it("always renders a ##_COMP_NAME_##", () => {
    expect(ShallowBtn().find("##_COMP_NAME_##")).to.have.length(1);
  });

});
