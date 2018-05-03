import React from "react";
import { ThemeProvider } from "emotion-theming";
import PropTypes from "prop-types";
import theme from "../theme";

const Wrapper = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
Wrapper.propTypes = {
  /**
   * Type of Wrapper
   */
  // type: PropTypes.oneOf(['warning', 'info', 'error', 'success']),
  children: PropTypes.element
};
Wrapper.defaultProps = {
  // type: 'error',
  children: <span />
};
export default Wrapper;
