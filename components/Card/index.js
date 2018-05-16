import PropTypes from "prop-types";
import React from "react";
import VerticalCard from "../VerticalCard";
import HorizontalCard from "../HorizontalCard";

const Card = props => {
  const { auid, horizontalMobile, ...remainingProps } = props;
  return (
    <div auid={auid}>
      <VerticalCard {...remainingProps} desktopOnly={horizontalMobile} />
      {!!horizontalMobile && <HorizontalCard {...remainingProps} hideOnDesktop={horizontalMobile} />}
    </div>
  );
};

Card.propTypes = {
  auid: PropTypes.string,
  horizontalMobile: PropTypes.bool
};

export default Card;
