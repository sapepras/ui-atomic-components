import styled from "react-emotion";
import React from "react";
import PropTypes from "prop-types";
import theme from "../../theme";

const Panel = ({ className, children }) => (
  <div theme={theme} className={className}>
    {children}
  </div>
);

const styledPanel = styled(Panel)`
  margin: 10px;
  background: #fff;
  text-align: left;
  border-radius: 6px;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string
};
Panel.defaultProps = {
  children: null,
  className: "default"
};
export default styledPanel;
