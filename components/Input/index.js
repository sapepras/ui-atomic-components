import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const CommonStyles = props => css`
  padding: 0.2rem 0.5rem;
  min-height: 36px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  line-height: 1.25;
  font-size: 14px;
  opacity: ${props.disabled ? '0.5' : '1'}

  &:active {
    border: solid 1px #585858;
  }
`;

const StyledInput = styled('input')`
  ${CommonStyles};
`;

const Input = props => {
  const { type, disabled } = props;

  return (
    <Fragment>
      <StyledInput disabled={disabled} type={type} />
    </Fragment>
  );
};

Input.defaultProps = {
  type: 'text',
  disabled: false
};

Input.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool
};

export default Input;
