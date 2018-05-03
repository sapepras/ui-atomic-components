import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const StyledButton = styled("button")`
  color: ${props => (props.disabled ? "grey" : "red")};
  background-color: white;
  border: 1px solid ${props => (props.disabled ? "grey" : "red")};
  padding: 1em;
`;

const Button = props => {
  const { type, onClick, disabled } = props;
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick} {...props}>
      {props.children}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Button type */
  type: PropTypes.string,
  /** Button status */
  disabled: PropTypes.bool,
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
  /** Button label */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

Button.defaultProps = {
  type: "button",
  disabled: false
};

export default Button;
