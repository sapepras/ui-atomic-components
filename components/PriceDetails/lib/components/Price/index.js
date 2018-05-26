import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Small = styled('small')`
  display: inline-block;
  vertical-align: top;
  padding-top: 0.3em;
  font-size: 0.45em;
  text-decoration: ${({ strikethrough }) => (strikethrough ? 'line-through' : 'none')};
`;

const colorMap = {
  blue: '#005599',
  gray: '#7f7f7f',
  grey: '#7f7f7f',
  black: '#333333',
  red: '#ee0000'
};

const Wrapper = styled('span')`
  color: ${({ color }) =>
    colorMap[color.trim().toLowerCase()] ? colorMap[color.trim().toLowerCase()] : colorMap.black};
  text-decoration: ${({ strikethrough }) => (strikethrough ? 'line-through' : 'none')};
  ${({ strikethrough }) =>
    strikethrough ? 'font-weight: normal; font-family: MalloryCond-Medium;' : ''};
`;

class Price extends PureComponent {
  render() {
    const { price, color = 'black', strikethrough = false } = this.props;
    // eslint-disable-next-line no-useless-escape
    const [num, dec] = price.replace(/[^\.\d]/g, '').split('.');

    if (!num || num.trim().length === 0) {
      return null;
    }

    return (
      <Wrapper color={color} strikethrough={strikethrough}>
        <Small strikethrough={strikethrough}>$</Small>
        {/* eslint-disable-next-line react/jsx-indent */}
        <span>{num}</span>
        {/* eslint-disable-next-line react/jsx-indent */}
        <Small strikethrough={strikethrough}>{dec}</Small>
      </Wrapper>
    );
  }
}

Price.propTypes = {
  price: PropTypes.string.isRequired,
  color: PropTypes.string,
  strikethrough: PropTypes.bool
};

export default Price;
