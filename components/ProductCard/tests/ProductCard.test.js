import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Json1 from "./json/data1.json";
import Json2 from "./json/data2.json";
import Json3 from "./json/data3.json";
import Json4 from "./json/data4.json";
import Json5 from "./json/data5.json";
import Json6 from "./json/data6.json";
import Json7 from "./json/data7.json";
import Json8 from "./json/data8.json";
import Json9 from "./json/data9.json";
import ProductCard from "../index";

const jsons = [Json1, Json2, Json3, Json4, Json5, Json6, Json7, Json8, Json9];

const testBasics = (json, idx) => {
  describe(`ProductCard - Basic Test - ${idx}`, () => {
    const props = json;
    const component = shallow(<ProductCard {...props} />);

    it("It Renderd", () => {
      expect(component.text().length).to.be.greaterThan(0);
    });
  });
};

jsons.forEach(testBasics);

// describe("FeaturedCategory", () => {
//   const props = Json1;
//   const component = shallow(<FeaturedCategory cms={cms} />);

//   it("Renders a heading", () => {
//     expect(component.find("h2")).to.have.length(1);
//   });

//   it("Heading same as headline", () => {
//     expect(component.find("h2").text()).to.equal(cms.headline);
//   });

//   it("Number of cards is same as length of category", () => {
//     expect(component.find("a")).to.have.length(cms.category.length);
//   });
// });
