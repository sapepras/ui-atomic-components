import React from 'react';
import PropTypes from 'prop-types';
import { tooltipWrapper as stylesTooltipWrapper } from './lib/styles';
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

  render() {
    return (
      <div className={stylesTooltipWrapper} data-auid={`tooltip${this.props.auid}`} onMouseEnter={this.show} onMouseLeave={this.hide}>
        {this.props.children}
        {this.state.visible && (
        <Modal {...this.props}>
        </Modal>
        )}
      </div>
 );
}
}

Tooltip.propTypes = {
auid: PropTypes.string,
children: PropTypes.any.isRequired
};

export default Tooltip;
