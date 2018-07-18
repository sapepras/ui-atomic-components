import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'emotion';

const container = css`
  position: static;
  display: inline-block;
  font-size: 1em;
`;

const relative = css`
  position: relative;
`;

const starsText = css`
  letter-spacing: 0.2em;
  font-weight: bold;
`;

const stars = css`
  ${starsText};
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  font-size: inherit;
`;

const Rating = (props = {}) => {
  let { value = 0, starColor, emptyStarColor, hideEmptyStars } = props; // eslint-disable-line
  if (typeof value === 'string' && value.trim().length === 0) {
    value = 0;
  }
  let rating = parseFloat(value) / 5 * 100; // eslint-disable-line
  if (!hideEmptyStars && value <= 0) {
    rating = 0;
  }
  const starWidth = `${rating}%`;
  const starStyle = { color: starColor, width: starWidth, cursor: null };
  const starBackgroundStyle = { color: emptyStarColor, cursor: null };

  return hideEmptyStars && rating <= 0 ? null : (
    <div aria-label={`${value} stars out of 5`} className={container}>
      <div className={relative}>
        <div className={stars} style={starStyle}>
          ★★★★★
        </div>
        <div aria-hidden className={starsText} style={starBackgroundStyle}>★★★★★</div>
      </div>
    </div>
  );
};

Rating.defaultProps = {
  starColor: '#f4ce42',
  emptyStarColor: '#6a6a6a',
  hideEmptyStars: false
};

Rating.propTypes = {
  /** Number of star rating from 1 to 5 */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** Main Star Color */
  starColor: PropTypes.string,
  /** Secondary Star Color */
  emptyStarColor: PropTypes.string,
  hideEmptyStars: PropTypes.bool
};

export default Rating;
