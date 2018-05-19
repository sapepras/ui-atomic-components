import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const large = css`
  text-decoration: line-through;
  margin-bottom: 2.5vw;
  line-height: 15px;
  fontfamily: "Futura-CondensedMedium !important";
`;
const small = css`
  display: inline-block;
  vertical-align: top;
  padding-top: 0.7em;
  font-size: 0.6em;
  text-decoration: line-through;
  fontfamily: "Futura-CondensedMedium !important";
`;

class PriceXed extends Component {
  render() {
    const { price } = this.props;
    const [num, dec] = price.replace(/\$/g, "").split(".");

    if (!num || num.trim().length === 0) {
      return null;
    }

    return (
      <span>
        <small className={small}>$</small>
        <span className={large}>{num}</span>
        {/* eslint-disable-line react/jsx-indent */}
        <small className={small}>{dec}</small>
        {/* eslint-disable-line react/jsx-indent */}
      </span>
    );
  }
}

PriceXed.propTypes = {
  price: PropTypes.string.isRequired
};

export default PriceXed;
