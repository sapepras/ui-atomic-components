import React from 'react';
import PropTypes from 'prop-types';
import styled, { cx, css } from 'react-emotion';
export const bp = {
  xs: { min: '0', max: '575px' },
  sm: { min: '576px', max: '767px' },
  md: { min: '768px', max: '991px' },
  lg: { min: '992px', max: '1199px' },
  xl: { min: '1200px', max: '' }
};

const modalContentStyle = css`
  position: relative;
  padding: 3.5rem 2.4375rem;
  border: 1px solid #ccc;
  background: #fff;
  text-align: center;
  overflow-y: scroll;
  max-height: 80vh;
  box-shadow: 0 14px 36px 8px rgba(0, 0, 0, 0.06), 0 12px 32px 6px rgba(0, 0, 0, 0.04), 0 5px 12px 0 rgba(0, 0, 0, 0.06);

  @media only screen and (min-width: ${bp.lg.min}) {
    min-height: 480px;
    width: 740px;
  }

  @media only screen and (min-width: ${bp.sm.min}) and (max-width: ${bp.md.max}) {
    min-height: 400px;
    width: 540px;
  }

  @media only screen and (min-width: ${bp.xs.min}) and (max-width: ${bp.xs.max}) {
    height: 100%;
    width: 100%;
    max-height: 84vh;
  }

  :focus {
    outline: none;
  }

  @-webkit-keyframes zoomIn {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }
  }

  @-webkit-keyframes zoomOut {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    to {
      opacity: 0;
    }
  }

  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
`;

const zoomIn = css`
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem;
`;

const CloseButton = styled.button`
  font-family: 'Mallory-Book';
  font-size: 1.375rem;
  color: #585858;
  cursor: pointer;
  border: none;
  background: none;
`;

class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.modalContent = React.createRef();
  }

  componentDidMount() {
    this.modalContent.current.focus();
    const { storeContentTarget } = this.props;
    storeContentTarget(this.modalContent.current);
  }

  render() {
    const {
 children, modalContentClassName, handleClose, isOpen, closeIcon
} = this.props;
    return (
      <div ref={this.modalContent} className={cx(modalContentStyle, isOpen ? zoomIn : '', modalContentClassName)} aria-modal="true" tabIndex="-1">
        {typeof closeIcon === 'boolean' &&
          closeIcon && (
            <CloseButtonWrapper>
              <CloseButton onClick={() => handleClose()}>X</CloseButton>
            </CloseButtonWrapper>
          )}
        {typeof closeIcon !== 'boolean' && closeIcon && <CloseButtonWrapper>{closeIcon}</CloseButtonWrapper>}
        {children}
      </div>
    );
  }
}

ModalContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  modalContentClassName: PropTypes.string,
  handleClose: PropTypes.func,
  storeContentTarget: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  closeIcon: PropTypes.bool
};

export default ModalContent;
