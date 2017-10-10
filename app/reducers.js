import { combineReducers } from 'redux';

import global from './containers/App/reducer';
import pageRouter from './containers/PageRouter/reducer';
import alertRouter from './containers/AlertRouter/reducer';
import modalRouter from './containers/ModalRouter/reducer';
import home from './containers/Home/reducer';

const rootReducer = combineReducers({
  global,
  pageRouter,
  alertRouter,
  modalRouter,
  // ----------
  home
});

export default rootReducer;
