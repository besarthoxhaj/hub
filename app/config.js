/**
 * @flow
 *
 * Global config file.
 */

import { mergeAll } from 'ramda';

const _base = {
  version: require('../package.json').version,
};

export const dev = {
  api: `http://localhost:2222`,
};

export const stag = {
  api: 'https://staging.com',
};

export const prod = {
  api: 'https://production.com',
};

export const envs = {
  dev,
  stag,
  prod,
};

export default (key:string) => mergeAll([
  {},
  _base,
  envs[window._REACT_ENV || 'dev'],
])[key];
