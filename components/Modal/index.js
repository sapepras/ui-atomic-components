import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import Overlay from './lib/Overlay';
import ModalContent from './lib/ModalContent';
const KEY_CODE_ESC = 27;
let prevDiff = -1;

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
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.storeContentTarget = this.storeContentTarget.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.el = document.createElement('div');
    document.body.classList.remove(bodyOverrides);
  }

  componentDidMount() {
    document.body.appendChild(this.el);
    this.el.focus();
    document.body.classList.add(bodyOverrides);
    this.el.addEventListener('touchstart', this.handleTouchStart);
    this.el.addEventListener('touchmove', this.handleTouchMove);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      document.body.classList.add(bodyOverrides);
    }
    this.setState({
      isOpen: nextProps.isOpen
    });
  }

  componentWillUnmount() {
    document.body.classList.remove(bodyOverrides);
    document.body.removeChild(this.el);
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
    if (event.touches.length === 2) {
      const { touches } = event;
      const curDiff = Math.abs(touches[0].clientX - touches[1].clientX);

      if (prevDiff > 0) {
        if (curDiff < prevDiff) {
          // The distance between the two pointers has decreased
          console.log(`pr${prevDiff} - cur${curDiff}`);
          // this.setState({
          //   isOpen: false
          // });
        }
      }
      // Cache the distance for the next move event
      prevDiff = curDiff;
    }
  }

  handleClose() {
    document.body.classList.remove(bodyOverrides);
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
