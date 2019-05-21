import React from 'react';
import PropTypes from 'prop-types';
import { StyledPopoverModalWrapper, StyledPopover } from './css';

class WrappedPopoverModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.wrappedOnWindowBodyClick = this.wrappedOnWindowBodyClick.bind(this);
  }

  componentDidMount() {
    this.attachDomEvents();
  }

  componentWillUnmount() {
    this.removeDomEvents();
  }

  wrappedOnWindowBodyClick(e) {
    if (this.privateOnWindowBodyClick && !this.isPopoverElement(e.target)) {
      this.privateOnWindowBodyClick(e);
    }
  }

  /**
   * Native events - breaking with react convention for a number of reasons.
   * Given current site component structure, we are unable to close the popover with a page click using traditional react patterns.
   * This is driven by a number of issues: css z-index stacking context / react synthetic events vs native events.
   */
  attachDomEvents() {
    if (document && this.privateOnWindowBodyClick) {
      document.querySelector('body').addEventListener('click', this.wrappedOnWindowBodyClick);
    }
  }

  removeDomEvents() {
    if (document && this.privateOnWindowBodyClick) {
      document.querySelector('body').removeEventListener('click', this.wrappedOnWindowBodyClick);
    }
  }

  isPopoverElement(el) {
    if (!el) {
      return false;
    }

    if (el.id === this.props.ignoreWindowBodyClickId) {
      return true;
    }

    return this.isPopoverElement(el.parentNode);
  }

  parseDirection(direction) {
    let result = { mobile: 'top', desktop: 'left' };
    if (typeof direction === 'string') {
      result = { mobile: direction, desktop: direction };
    } else {
      result = {
        mobile: direction.mobile || direction.desktop || 'top',
        desktop: direction.desktop || direction.mobile || 'left'
      };
    }
    return result;
  }

  render() {
    const { direction, lineHeightFix, children, onWindowBodyClick } = this.props;

    this.privateOnWindowBodyClick = onWindowBodyClick;
    const wrapperProps = {
      direction: this.parseDirection(direction),
      lineHeightFix
    };
    return (
      <StyledPopoverModalWrapper {...wrapperProps}>
        <StyledPopover direction={this.parseDirection(direction)}>{children}</StyledPopover>
      </StyledPopoverModalWrapper>
    );
  }
}

const PopoverModal = props => {
  const { open, ...remainingProps } = props;
  return open ? <WrappedPopoverModal {...remainingProps} /> : null;
};

const directionString = PropTypes.oneOf(['left', 'right', 'top', 'bottom']);
const directionObject = PropTypes.shape({ mobile: directionString, desktop: directionString });

WrappedPopoverModal.propTypes = {
  children: PropTypes.any,
  direction: PropTypes.oneOfType([directionString, directionObject]),
  lineHeightFix: PropTypes.number.isRequired,
  onWindowBodyClick: PropTypes.func.isRequired,
  ignoreWindowBodyClickId: PropTypes.string.isRequired
};

PopoverModal.propTypes = {
  ...WrappedPopoverModal.propTypes,
  open: PropTypes.bool
};

export default PopoverModal;
