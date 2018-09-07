import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';
import React from 'react';
import PropTypes from 'prop-types';
import { tooltipWrapper as stylesTooltipWrapper, tooltipWrapperCursor as stylesTooltipWrapperCursor } from './lib/styles';
import Modal from './lib/TooltipModal';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.setVisibility = this.setVisibility.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onWindowBodyClick = this.onWindowBodyClick.bind(this);
    this.attachDomEvents = this.attachDomEvents.bind(this);
    this.removeDomEvents = this.removeDomEvents.bind(this);
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.showOnClick) {
      this.attachDomEvents();
    }
  }

  componentWillUnmount() {
    this.removeDomEvents();
  }

  onWindowBodyClick() {
    if (this.state.visible) {
      this.hide();
    }
  }

  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const currentTimeStamp = new Date().getTime();
    const allowToggle = !this.prevToggleTimeStamp || currentTimeStamp - this.prevToggleTimeStamp > 300;
    if (allowToggle) {
      this.setVisibility(!this.state.visible);
      this.prevToggleTimeStamp = currentTimeStamp;
    }
  }

  setVisibility(visible) {
    this.setState(Object.assign({}, this.state, { visible }));
  }

  show() {
    this.setVisibility(true);
  }

  hide() {
    this.setVisibility(false);
  }

  /**
   * Native events - breaking with react convention for a number of reasons.
   * Given current site component structure, we are unable to close the popover with a page click using traditional react patterns.
   * This is driven by a number of issues: css z-index stacking context / react synthetic events vs native events.
   */
  attachDomEvents() {
    if (ExecutionEnvironment.canUseDOM) {
      this.wrapperRef.current.addEventListener('click', this.onClick);
      this.wrapperRef.current.addEventListener('touchstart', this.onClick);
      document.querySelector('body').addEventListener('click', this.onWindowBodyClick);
      document.querySelector('body').addEventListener('touchstart', this.onWindowBodyClick);
    }
  }

  removeDomEvents() {
    if (ExecutionEnvironment.canUseDOM) {
      this.wrapperRef.current.removeEventListener('click', this.onClick);
      this.wrapperRef.current.removeEventListener('touchstart', this.onClick);
      document.querySelector('body').removeEventListener('click', this.onWindowBodyClick);
      document.querySelector('body').removeEventListener('touchstart', this.onWindowBodyClick);
    }
  }

  render() {
    const { showOnClick, ariaLabel } = this.props;
    const wrapperProps = {
      className: !showOnClick ? stylesTooltipWrapper : stylesTooltipWrapperCursor,
      'data-auid': `tooltip${this.props.auid}`,
      onMouseEnter: !showOnClick ? this.show : undefined,
      onMouseLeave: !showOnClick ? this.hide : undefined,
      ref: this.wrapperRef
    };
    return (
      <div {...wrapperProps} data-is-tooltip="yes" aria-label={ariaLabel}>
        {this.props.children}
        {this.state.visible && <Modal {...this.props} />}
      </div>
    );
  }
}

Tooltip.propTypes = {
  auid: PropTypes.string,
  children: PropTypes.any.isRequired,
  showOnClick: PropTypes.bool,
  ariaLabel: PropTypes.string
};

Tooltip.defaultProps = {
  showOnClick: false
};

export default Tooltip;
