import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import Overlay from './lib/Overlay';
import ModalContent from './lib/ModalContent';
const KEY_CODE_ESC = 27;

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
    this.prevDiff = -1;
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
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
    this.addBodyOverrides();
    this.el.addEventListener('touchstart', this.handleTouchStart);
    this.el.addEventListener('touchmove', this.handleTouchMove);
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
  }

  addBodyOverrides() {
    document.body.classList.add(bodyOverrides);
  }

  removeBodyOverrides() {
    document.body.classList.remove(bodyOverrides);
  }

  /**
   * This will be handled soon
   * @param {event}
   */
  handleTouchStart(event) {
    // event.preventDefault();
    console.log(event.touches.length);
  }

  /**
   * This will be handled soon
   * @param {event}
   */
  handleTouchMove(event) {
    // console.log(event.touches);
    if (event.touches.length === 2) {
      const { touches } = event;
      const curDiff = Math.abs(touches[0].clientX - touches[1].clientX);

      if (this.prevDiff > 0) {
        if (curDiff < this.prevDiff) {
          // The distance between the two pointers has decreased
          console.log(`pr${this.prevDiff} - cur${curDiff}`);
          // this.setState({
          //   isOpen: false
          // });
        }
      }
      // Cache the distance for the next move event
      this.prevDiff = curDiff;
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
