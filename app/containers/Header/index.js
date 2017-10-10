import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector as createSelector } from 'reselect';

class HeaderComp extends React.PureComponent {
  render() {
    return (
      <div style={this.getStyle()}/>
    );
  };
  getStyle() {
    return {
      backgroundColor:'#f2f2f2',
      height:55
    };
  };
}

const mapStateToProps = createSelector({});

const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps
) => {
  return {};
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(HeaderComp);
