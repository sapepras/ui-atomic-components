import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import DropDown from '../index';

describe('DropDown', () => {
  const props = {
    DropdownOptions: [ { title: 'testTitle' } ],
    name: 'testName',
    id: 'testId',
  };

  it('always renders a DropDown', () => {
    const wrapper = mount(<DropDown {...props} />);
    expect(wrapper).to.have.length(1);
  });

});
