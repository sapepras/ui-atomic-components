/* //------- To Do ------------
- change the star color to yellow
- set a local state and clicking on a star updates the state and the star color.
//---------------------------
 */

import PropTypes from "prop-types";
import React from "react";
import { css } from "emotion";
// import skeleton from './skeleton'
// import './Rating.css';

/**
 * Star rating Molecule with click-able buttons
 */

const container = css`
  display: inline-block;
  position: relative;
  font-size: 1.75vw;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
  @media (min-width: 1025px) {
    font-size: 1.25vw;
  }
`;

const stars = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  font-size: inherit;
`;

const Rating = props => {
  let { value = 0, onClick, primaryStarColor, secondaryStarColor } = props; // eslint-disable-line
  // const stars = Array.from({ length: 5 }, (a, b) => b);
  const rating = value / 5 * 100; // eslint-disable-line

  const starStyle = { color: primaryStarColor, width: `${rating}%`, cursor: null };
  const starBackgroundStyle = { color: `${secondaryStarColor}`, cursor: null };

  if (onClick) {
    starStyle.cursor = "pointer";
    starBackgroundStyle.cursor = "pointer";
  }

  const handleClick = i => () => {
    if (onClick) {
      onClick(i + 1);
    }
  };

  return (
    <div
      role="link"
      tabIndex="0"
      className={container}
      onClick={handleClick()}
      onKeyPress={() => {}}
    >
      <div className={stars} style={starStyle}>
        ★★★★★
      </div>
      <div style={starBackgroundStyle}>☆☆☆☆☆</div>
    </div>
  );
};

Rating.defaultProps = {
  primaryStarColor: "#f4ce42",
  secondaryStarColor: "#6a6a6a",
  onClick: () => {}
};

Rating.propTypes = {
  /** Number of star rating from 1 to 5 */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** Click handler - returns index of star clicked */
  onClick: PropTypes.func,
  /** Main Star Color */
  primaryStarColor: PropTypes.string,
  /** Secondary Star Color */
  secondaryStarColor: PropTypes.string
};

export default Rating;
