const gulp = require('gulp');
const path = require('path');
const copyPaste = require('./copy-paste');
const style = require('./style');

const BASE = path.resolve(__dirname + '/../..');

const paths = {
  sass: `${BASE}/sass/**/*.scss`,
  sassEntry: `${BASE}/sass/entry.scss`,
  sassApp: `${BASE}/app/**/*.scss`,
  build: `${BASE}/build`,
};

gulp.task('style', style({src:paths.sassEntry,dest:paths.build}));

gulp.task('watch', () => {
  gulp.watch(paths.sass, ['style']);
  gulp.watch(paths.sassApp, ['style']);
});

gulp.task('default', [
  'style',
  'watch',
]);

gulp.task('prod',[
  'style'
]);
