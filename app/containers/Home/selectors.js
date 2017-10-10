import { createSelector as create } from 'reselect';

export const getDomain = () => (state) => {
  return state['home'];
};

export const getSnaps = () => create(
  getDomain(),
  (subState) => subState['snaps']
);
