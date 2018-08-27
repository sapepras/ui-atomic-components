import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { cleanPrice } from '../../util';

const Super = styled('sup')`
  display: inline-block;
  text-decoration: ${({ strikethrough }) => (strikethrough ? 'line-through' : 'none')};
  ${({ strikethrough }) => strikethrough ? 'font-family: MalloryCond-Medium;' : ''};
`;

const colorMap = {
  blue: '#005599',
  gray: '#767676',
  black: '#333333',
  red: '#ee0000'
};

const Wrapper = styled('span')`
  color: ${({ colorCode }) => colorMap[colorCode.trim().toLowerCase()] ? colorMap[colorCode.trim().toLowerCase()] : colorMap.black};
  text-decoration: ${({ strikethrough }) => (strikethrough ? 'line-through' : 'none')};
  ${({ strikethrough }) => strikethrough ? 'font-family: MalloryCond-Medium;' : ''};
`;

class Price extends PureComponent {
  render() {
    const { price, color = 'black', strikethrough = false } = this.props;
    // eslint-disable-next-line no-useless-escape
    const [num, dec] = cleanPrice(price).split('.');

    if (!num || num.trim().length === 0) {
      return null;
    }

    return (
      <Wrapper className="c-price__sub" colorCode={color} strikethrough={strikethrough}>
        <Super className="c-price__super" strikethrough={strikethrough}>$</Super>
        {/* eslint-disable-next-line react/jsx-indent */}
        <span>{num}</span>
        {/* eslint-disable-next-line react/jsx-indent */}
        <Super className="c-price__super" strikethrough={strikethrough}>{dec.substr(0, 2)}</Super>
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
