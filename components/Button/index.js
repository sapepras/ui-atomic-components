import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "react-emotion";

const commonBtnStyle = css`
  border-radius: 30px;
  min-height: 60px;
  border-width: 3px;
  border-style: solid;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const sizeStyles = props => {
  let minWidth = "180px";

  if (props.size === "S") {
    minWidth = "120px";
  } else if (props.size === "M") {
    minWidth = "150px";
  } else {
    minWidth = "180px";
  }

  return css`
    min-width: ${minWidth};
  `;
};

const primaryBtnStyle = props => css`
  color: #fff;
  color: #fff;
  border-color: ${props.disabled ? "transparent" : "#005599"};
  background-color: ${props.disabled ? "rgba(2, 85, 204, 0.1)" : "#005599"};
  padding: 1rem;
  &:hover {
    background-color: #0255cc;
    border: 2px solid #0255cc;
    border-style: dotted;
  }

  &:focus {
    background-color: #0055a6;
    border: 2px dotted #fff;
  }

  &:active {
    background-color: #003366;
    border: 2px dotted #003366;
  }
`;

const secondaryBrnStyles = props => css`
  color: ${props.disabled ? "rgba(2, 85, 204, 0.1)" : "#005599"};
  border-color: ${props.disabled ? "rgba(2, 85, 204, 0.1)" : "#005599"};
  background-color: #fff;
  padding: 1rem;
  &:hover {
    background-color: #e6eefa;
    border: 2px solid #003366;
    border-style: dotted;
  }

  &:focus {
    background-color: #fff;
    border: 2px dotted #005599;
  }

  &:active {
    background-color: #0255cc;
    border: 2px dotted #0255cc;
    color: #fff;
  }
`;

const StyledButton = styled("button")`
  ${commonBtnStyle};
  ${sizeStyles};
  ${props =>
    props.btntype === "secondary" ? secondaryBrnStyles : primaryBtnStyle};
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
  /** Btn Size variant */
  size: PropTypes.oneOf(["L", "M", "S"]),
  /** Button type variant */
  btntype: PropTypes.oneOf(["primary", "secondary"]),
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
  /** Button label */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

Button.defaultProps = {
  type: "button",
  size: "L",
  btntype: "primary",
  disabled: false
};

export default Button;
