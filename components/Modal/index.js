import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import Overlay from './lib/Overlay';
import ModalContent from './lib/ModalContent';
const KEY_CODE_ESC = 27;
const MIN_CLOSE_POINT = 0.4;

const bodyOverrides = css`
  overflow: hidden;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen
    };
    this.modalTarget = null;
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.storeContentTarget = this.storeContentTarget.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.addBodyOverrides = this.addBodyOverrides.bind(this);
    this.removeBodyOverrides = this.removeBodyOverrides.bind(this);
    this.el = document.createElement('div');
    this.removeBodyOverrides();
  }

  componentDidMount() {
    document.body.appendChild(this.el);
    this.el.focus();
    this.el.addEventListener('touchend', this.handleTouchEnd);
    const { isOpen } = this.state;
    if (isOpen) {
      this.addBodyOverrides();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      this.addBodyOverrides();
    } else {
      this.removeBodyOverrides();
    }
    this.setState({
      isOpen: nextProps.isOpen
    });
  }

  componentWillUnmount() {
    this.removeBodyOverrides();
    document.body.removeChild(this.el);
    this.el.removeEventListener('touchend', this.handleTouchEnd);
  }

  addBodyOverrides() {
    document.body.classList.add(bodyOverrides);
  }

  removeBodyOverrides() {
    document.body.classList.remove(bodyOverrides);
  }

  handleTouchEnd(event) {
    const { scale } = event;
    if (scale < MIN_CLOSE_POINT) {
      this.handleClose();
    }
  }

  handleClose() {
    this.removeBodyOverrides();
    this.setState({
      isOpen: false
    });
    const { handleClose } = this.props;
    if (handleClose) {
      handleClose(false);
    }
  }

  handleOverlayClick(event) {
    if ((!this.modalTarget.contains(event.target) && event.target !== this.modalTarget) || event.keyCode === KEY_CODE_ESC) {
      this.handleClose();
    }
  }

  storeContentTarget(modalTarget) {
    this.modalTarget = modalTarget;
  }

  render() {
    const { isOpen } = this.state;
    const { modalContentClassName, closeIcon } = this.props;
    return isOpen ? (
      ReactDOM.createPortal(
        <Overlay handleOverlayClick={this.handleOverlayClick}>
          <ModalContent
            modalContentClassName={modalContentClassName}
            storeContentTarget={this.storeContentTarget}
            handleClose={this.handleClose}
            isOpen={isOpen}
            closeIcon={closeIcon}
          >
            {this.props.children}
          </ModalContent>
        </Overlay>,
        this.el
      )
    ) : (
      <div />
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  isOpen: PropTypes.bool,
  modalContentClassName: PropTypes.string,
  handleClose: PropTypes.func,
  closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node, PropTypes.element])
};

Modal.defaultProps = {
  closeIcon: true
};

export default Modal;
