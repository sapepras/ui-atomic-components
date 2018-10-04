import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { cleanPrice } from '../../util';

const Super = styled('sup')`
  display: inline-block;
  text-decoration: ${({ strikethrough }) => (strikethrough ? 'line-through' : 'none')};
  ${({ strikethrough }) => (strikethrough ? 'font-family: MalloryCond-Medium;' : '')};
`;

const ppuStyles = css`
  font-family: 'Mallory-Condensed-Medium', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  color: gray;
  margin: 0 12px;
  line-height: 1rem;
  line-through: none;
`;

const colorMap = {
  blue: '#005599',
  gray: '#767676',
  black: '#333333',
  red: '#ee0000'
};

const Wrapper = styled('span')`
  color: ${({ colorCode }) => (colorMap[colorCode.trim().toLowerCase()] ? colorMap[colorCode.trim().toLowerCase()] : colorMap.black)};
  text-decoration: ${({ strikethrough }) => (strikethrough ? 'line-through' : 'none')};
  ${({ strikethrough }) => (strikethrough ? 'font-family: MalloryCond-Medium;' : '')};
`;

/**
 * Functional component which displays the price per unit of certain products such as ammo boxes
 * @param {*} props contains the price per unit and the ppu message.
 */
const PricePerUnit = props => {
  // eslint-disable-next-line
  if (!props.pricePerUnit || !props.pricePerUnit2) return null; /* return null if ppu is not present, a bit of  defensive coding! */
  // cents to be used if pricePerUnit2 is deemed not necessary in future.
  // eslint-disable-next-line
  let [dollar, cents] = props.pricePerUnit.split('.');
  if (!dollar) dollar = '$0';
  return (
    <span className={ppuStyles}>
      {props.pricePerUnit2}
      {props.ppuMessage}
    </span>
  );
};
class Price extends PureComponent {
  render() {
    const { price, color = 'black', strikethrough = false, hasPPU, ppuMessage, ppuMsg, pricePerUnit } = this.props;
    // eslint-disable-next-line no-useless-escape
    const [num, dec] = cleanPrice(price).split('.');

    if (!num || num.trim().length === 0) {
      return null;
    }

    return (
      <Fragment>
        <Wrapper className="c-price__sub" colorCode={color} strikethrough={strikethrough}>
          <Super className="c-price__super" strikethrough={strikethrough}>
            $
          </Super>
          {/* eslint-disable-next-line react/jsx-indent */}
          <span>{num}</span>
          {/* eslint-disable-next-line react/jsx-indent */}
          <Super className="c-price__super" strikethrough={strikethrough}>
            {dec.substr(0, 2)}
          </Super>
        </Wrapper>
        {hasPPU && <PricePerUnit pricePerUnit2={ppuMsg} pricePerUnit={pricePerUnit} ppuMessage={ppuMessage} />}
      </Fragment>
    );
  }
}

Price.propTypes = {
  price: PropTypes.string.isRequired,
  color: PropTypes.string,
  strikethrough: PropTypes.bool,
  hasPPU: PropTypes.bool,
  pricePerUnit: PropTypes.string,
  ppuMessage: PropTypes.string,
  ppuMsg: PropTypes.string
};

PricePerUnit.propTypes = {
  pricePerUnit: PropTypes.string,
  ppuMessage: PropTypes.string,
  /* a variant of ppu pricing , it usually is sent as cents from API layer  */
  pricePerUnit2: PropTypes.string
};

export default Price;
