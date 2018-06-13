import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import getBadgeColor from './lib/util';

const StyledDiv = styled('div')`
  position: ${({ disableAbsolutePositioning }) =>
    disableAbsolutePositioning ? 'relative' : 'absolute'};
  ${({ disableAbsolutePositioning }) =>
    disableAbsolutePositioning ? 'display: inline-block;' : ''} top: 0px;
  color: #fff;
  background-color: ${({ text }) => getBadgeColor(text)};
  left: ${({ small }) => (small ? '18px' : '2.2em')};
  font-size: ${({ small }) => (small ? '10px' : '14px')};
  padding: ${({ small }) => (small ? '5px 8px;' : '6px 12px;')};
  font-family: 'Mallory-Bold';
  font-weight: ${({ small }) => (small ? 'bold' : 'normal')};
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: normal;
`;

const Badge = props => <StyledDiv {...props}>{props.text}</StyledDiv>;

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  disableAbsolutePositioning: PropTypes.bool,
  small: PropTypes.bool
};

export default Badge;
