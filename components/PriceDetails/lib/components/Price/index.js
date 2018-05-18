import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const small = css`
  display: inline-block;
  vertical-align: top;
  padding-top: 0.2em;
  font-size: 0.6em;
`;

class Price extends Component {
  render() {
    const { price } = this.props;
    const [num, dec] = price.replace(/\$/g, "").split(".");

    if (!num || num.trim().length === 0) {
      return null;
    }

    return (
      <span>
        <small className={small}>$</small>
        <span>{num}</span>{/* eslint-disable-line react/jsx-indent */}
        <small className={small}>{dec}</small>{/* eslint-disable-line react/jsx-indent */}
      </span>
    );
  }
}

Price.propTypes = {
  price: PropTypes.string.isRequired
};

export default Price;
