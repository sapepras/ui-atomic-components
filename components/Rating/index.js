import PropTypes from "prop-types";
import React from "react";
import { css } from "emotion";

const container = css`
  position: static;
  display: inline-block;
  font-size: 1em;
`;

const relative = css`
  position: relative;
`;

const stars = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  font-size: inherit;
`;

const Rating = (props = {}) => {
  let { value = 0, starColor, emptyStarColor } = props; // eslint-disable-line
  const rating = value / 5 * 100; // eslint-disable-line

  const starWidth = `${rating}%`;
  const starStyle = { color: starColor, width: starWidth, cursor: null };
  const starBackgroundStyle = { color: emptyStarColor, cursor: null };

  return (
    <div role="link" tabIndex="0" className={container}>
      <div className={relative}>
        <div className={stars} style={starStyle}>
          ★★★★★
        </div>
        <div style={starBackgroundStyle}>☆☆☆☆☆</div>
      </div>
    </div>
  );
};

Rating.defaultProps = {
  starColor: "#f4ce42",
  emptyStarColor: "#6a6a6a"
};

Rating.propTypes = {
  /** Number of star rating from 1 to 5 */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** Main Star Color */
  starColor: PropTypes.string,
  /** Secondary Star Color */
  emptyStarColor: PropTypes.string
};

export default Rating;
