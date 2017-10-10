#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const portFinderSync = require('portfinder-sync');
const argv = require('minimist')(process.argv.slice(2));

const processDir = process.cwd();
const snapPath = argv._[0];

const snapDir = path.join(processDir + '/' + snapPath);

// check and make sure the main directories
// and files are present
const htmlDir = path.join(snapDir + '/' + 'html/');
const imgsDir = path.join(snapDir + '/' + 'imgs/');
const snapFile = path.join(snapDir + '/' + 'index.json');

if(
  !fs.existsSync(htmlDir) ||
  !fs.existsSync(imgsDir) ||
  !fs.existsSync(snapFile)
) {
  throw new Error([
    'Hub needs an "html" and "imgs" folder, combined',
    'with an "index.json" file. One of them is missing.'
  ].join(' '));
}

const basePort = 2222;
const openPort = portFinderSync.getPort(basePort);

if(basePort !== openPort) {
  throw new Error([
    'Hub port is already been used. Check if you',
    'have already a server running on port 2222.'
  ].join(' '));
}

process.env.BASE_IMGS = imgsDir;
process.env.SNAP_PATH = snapFile;

require('../api/index');
