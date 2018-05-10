import { css } from "emotion";
import PropTypes from "prop-types";
import React from "react";

import Panel from "../Panel";
import Rating from "../Rating";

const cardStyles = css`
  text-align: center;
  flex: 1;
  background: #fff;
  padding: 1rem;
  margin: auto;
  width: 250px;
  height: 350px;
`;

const imageStyle = css`
  max-width: 250px;
  max-height: 200px;
`;

const Card = props => {
  const { image, title, heading, description, rating, price } = props; // eslint-disable-line
  return (
    <Panel className={cardStyles}>
      {!!image && <img src={image} alt={heading} className={imageStyle} />}
      <h2>{title}</h2>
      <p>{description}</p>
      {!!rating && <Rating value={rating} />}
      <p>{price}</p>
    </Panel>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.oneOf(PropTypes.number, PropTypes.string),
  price: PropTypes.string
};

export default Card;
