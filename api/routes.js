'use strict';

const fs = require('fs');
const path = require('path');
const data = require('../data');

const BASE_APP = path.join(__dirname + '/../build');
const BASE_IMGS = process.env.BASE_IMGS || path.join(__dirname + '/../data/imgs/');
const SNAP_PATH = process.env.SNAP_PATH || path.join(__dirname + '/../data/GET.SNAP_CONF.json');

module.exports = [
  {
    method: 'GET',
    path: '/{path*}',
    handler: (req, res) => {

      const { path } = req.params;

      switch (path) {
        case '':
          return res.file(BASE_APP + '/index.html',{confine:false});
        case 'bundle.js':
          return res.file(BASE_APP + '/bundle.js',{confine:false});
        case 'main.css':
          return res.file(BASE_APP + '/main.css',{confine:false});
        case 'main.css.map':
          return res.file(BASE_APP + '/main.css.map',{confine:false});
        default:
          return res('Not found').code(404);
      }
    }
  },
  {
    method: 'GET',
    path: '/snap/{numId*}',
    handler: (req, res) => {
      const { numId } = req.params;
      const imgPath = BASE_IMGS + numId + '.png';
      return res.file(imgPath);
    }
  },
  {
    method: 'GET',
    path: '/api/snaps',
    handler: (req, res) => {
      const jsonSnap = fs.readFileSync(SNAP_PATH,'utf8');
      return res(jsonSnap);
    }
  },
];
