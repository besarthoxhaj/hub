import c from '../../constants';

const initialState = {
  snaps: undefined,
};

export default function(state = {}, action) {
  switch (action.type) {
    case c.LOAD_SNAPS:
      return {
        ...state,
        snaps: action.data
      };
    default:
      return {
        ...state
      };
  }
}
