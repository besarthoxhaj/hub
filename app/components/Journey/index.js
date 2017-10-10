import React from 'react';

export default class Journay extends React.Component {

  static defaultProps = {

  };

  render() {
    return (
      <div className="c-journay">
        {this.props.children}
      </div>
    );
  };
}
