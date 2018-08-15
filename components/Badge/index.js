import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import getBadgeColor from './lib/util';

const StyledDiv = styled('div')`
  position: ${({ disableAbsolutePositioning }) => (disableAbsolutePositioning ? 'relative' : 'absolute')};
  ${({ disableAbsolutePositioning }) => (disableAbsolutePositioning ? 'display: inline-block;' : '')} top: 0px;
  color: #fff;
  background-color: ${({ text }) => getBadgeColor(text)};
  left: 15px;
  font-size: ${({ smallBadge }) => (smallBadge ? '10px' : '14px')};
  padding: ${({ smallBadge }) => (smallBadge ? '3px 8px;' : '4px 12px;')};
  font-family: 'Mallory-Bold';
  font-weight: ${({ smallBadge }) => (smallBadge ? 'bold' : 'normal')};
  text-transform: uppercase;
  line-height: ${({ smallBadge }) => (smallBadge ? '14px' : '20px')};
  letter-spacing: normal;
  white-space: nowrap;
`;

const Badge = props => (
  <StyledDiv {...props} className="badge">
    {props.text}
  </StyledDiv>
);

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  disableAbsolutePositioning: PropTypes.bool,
  smallBadge: PropTypes.bool
};

export default Badge;
