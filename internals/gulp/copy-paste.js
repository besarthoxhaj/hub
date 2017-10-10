const gulp = require('gulp');

module.exports = (conf) => {
  return () => {
    return gulp.src(conf.src)
      .pipe(gulp.dest(conf.dest));
  }
};
