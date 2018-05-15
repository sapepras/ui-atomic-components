import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { getBadgeColorHex } from "./lib/util";

const StyledDiv = styled("div")`
  position: ${({ disableAbsolutePositioning }) =>
    disableAbsolutePositioning ? "relative" : "absolute"};
  ${({ disableAbsolutePositioning }) =>
    disableAbsolutePositioning ? "display: inline-block;" : ""} top: 0px;
  left: 27px;
  color: #fff;
  background-color: ${({ text }) => getBadgeColorHex(text)};
  font-size: 14px;
  padding: 7px 12px;
  font-family: Mallory-Black;
  text-transform: uppercase;
`;

const Badge = props => <StyledDiv {...props}>{props.text}</StyledDiv>;

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  disableAbsolutePositioning: PropTypes.bool
};

export default Badge;
