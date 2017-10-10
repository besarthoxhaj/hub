import { take, call, put } from 'redux-saga/effects';
import * as utils from '../../utils';
import config from '../../config';
import homeSagas from '../Home/sagas';

export default function({history}) {

  if(history === undefined) {
    throw 'Forgot to pass {history} to appSagas';
  }

  return [
    homeSagas,
  ];
}
