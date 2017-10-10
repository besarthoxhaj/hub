const { merge } = require('ramda');
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

module.exports = (conf) => {

  const opts = merge({
    src: './sass/entry.scss',
    name: 'main.css',
    dest: './build'
  }, conf);

  return (done) => {
    const stream = gulp.src(opts.src)
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(rename(opts.name))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(opts.dest));

    stream.on('end', done);
  };
};
