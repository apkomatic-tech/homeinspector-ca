import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MobileLink extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (this.props.onCustomClick) {
      this.props.onCustomClick(event);
    }
  }

  render() {
    const { children, ...props } = this.props;

    return (
      <a href="#" {...this.props} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

MobileLink.defaultProps = {
  onClick: null
};

MobileLink.propTypes = {
  onClick: PropTypes.func,
  onCustomClick: PropTypes.func.isRequired
};
