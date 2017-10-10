import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector as createSelector } from 'reselect';


import * as sel from './selectors';
import Journey from '../../components/Journey';
import SnapShot from '../../components/SnapShot';

class Home extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    if(!this.props.snaps) {
      return (null);
    }

    return (
      <div>
        <Journey>
          {Object.keys(this.props.snaps).map(elm => {
            return (
              <SnapShot
                key={this.props.snaps[elm]['numId']}
                {...this.props.snaps[elm]}
              />
            );
          })}
        </Journey>
      </div>
    );
  };
}

export const mapStateToProps = createSelector({
  snaps: sel.getSnaps(),
});

export const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps
) => {

  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
  };
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(Home);
