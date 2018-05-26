import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { getBadgeColorHex } from './lib/util';

const StyledDiv = styled('div')`
  position: ${({ disableAbsolutePositioning }) =>
    disableAbsolutePositioning ? 'relative' : 'absolute'};
  ${({ disableAbsolutePositioning }) =>
    disableAbsolutePositioning ? 'display: inline-block;' : ''} top: 0px;
  color: #fff;
  background-color: ${({ text }) => getBadgeColorHex(text)};
  left: ${({ small }) => (small ? '20px' : '2.2em')};
  font-size: ${({ small }) => (small ? '10px' : '14px')};
  padding: ${({ small }) => (small ? '4px 7px;' : '6px 12px;')};
  font-family: Mallory-Black;
  text-transform: uppercase;
  line-height: 1;
`;

const Badge = props => <StyledDiv {...props}>{props.text}</StyledDiv>;

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  disableAbsolutePositioning: PropTypes.bool,
  small: PropTypes.bool
};

export default Badge;
