import { css } from "emotion";
import PropTypes from "prop-types";
import React from "react";

import Panel from "../Panel";
import Rating from "../Rating";

const cardStyles = css`
  text-align: left;
  background: #fff;
  margin: auto;
  font-family: Helvetica, sans-serif;
  color: #33333;
`;

const imageStyle = css`
  display: block;
  max-width: 100%;
  height: auto;
`;

const contentStyle = css`
  padding: 4vw;
`;

const textStyle = css`
  font-size: 2vw;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
  @media (min-width: 1025px) {
    font-size: 1.5vw;
  }
`;

const titleStyle = css`
  ${textStyle};
  color: #7f7f7f;
  text-transform: uppercase;
  margin-bottom: 0.7em;
`;

const priceStyle = css`
  font-weight: bold;
  font-size: 3vw;
  @media (max-width: 768px) {
    font-size: 4vw;
  }
  @media (min-width: 1025px) {
    font-size: 2vw;
  }
`;

const dividerStyle = css`
  width: 100%;
  border-bottom: 1px solid rgb(225, 225, 225);
  margin: 2vw 0vw;
`;

const Card = props => {
  const { image, title, heading, description, rating, price } = props; // eslint-disable-line
  return (
    <Panel className={cardStyles}>
      {!!image && <img src={image} alt={heading} className={imageStyle} />}
      <div className={contentStyle}>
        <div className={titleStyle}>{title}</div>
        <div className={textStyle}>{description}</div>

        {!!rating && (
          <p>
            <Rating value={rating} />
          </p>
        )}
        <div className={dividerStyle} />
        <div className={priceStyle}>{price}</div>
      </div>
    </Panel>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  price: PropTypes.string
};

export default Card;
