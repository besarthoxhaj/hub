import { call, put, takeEvery, select, all } from 'redux-saga/effects';
import * as R from 'ramda';

import c from '../../constants';
import * as utils from '../../utils';
import config from '../../config';

export function* loadSnaps() {
  const reqApi = utils.request({'method':'GET'});
  const url = `${config('api')}/api/snaps`;
  try {
    const data = yield call(reqApi,url);
    yield put({type:c.LOAD_SNAPS,data});
  } catch (err) {
    console.log('err',err);
  }
}

export default function*() {
  yield all([
    call(loadSnaps)
  ]);
}
