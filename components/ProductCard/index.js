import React from "react";
import Card from "../Card";

export default props => {
  let { imageUrl, title, shortDescription, rating, price } = props; // eslint-disable-line
  return (
    <Card
      image={imageUrl}
      title={title}
      heading={title}
      description={shortDescription}
      rating={rating}
      price={price}
    />
  );
};
