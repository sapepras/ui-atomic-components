import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Comp from '../index';

const jsons = [{ value: 5 }];

const testBasics = (json, idx) => {
  describe(`Rating - Basic Test - ${idx}`, () => {
    const props = json;
    const component = shallow(<Comp {...props} />);

    it('It Renderd', () => {
      expect(component.text().length).to.be.greaterThan(0);
    });
  });
};

jsons.forEach(testBasics);
