/**
 * File sets up Node with DOM testing capabilities
 * 1. requires babel-polyfill to transpile our test case written in ES6
 * 2. Exposes DOM variables to the node environment , so that the devs can write unit tests on DOM using Enzyme.mount/shallow
 * 3. Copies window object's properties into Node's global object.
 * */

require('babel-register')();
require('ignore-styles');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

chai.use(sinonChai);

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

global.window = dom.window;
global.document = dom.document;
global.navigator = { userAgent: 'node.js' };

const copyProperties = (src, target) => {
  const props = Object.getOwnPropertyNames(src)
    .filter(p => typeof target[p] === 'undefined')
    .reduce(
      (result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop)
      }),
      {}
    );

  Object.defineProperties(target, props);
};

copyProperties(window, global);
Enzyme.configure({ adapter: new Adapter() });
