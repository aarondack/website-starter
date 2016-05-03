import fs from 'fs';
import browserify from 'browserify';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import path from 'path';
import babel from 'gulp-babel';

gulp.task('run', () => {
  return gulp.src('./*.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['run'], () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.*").on('change', browserSync.reload);
});

gulp.task('build', function () {
  return browserify('./')
  .bundle()
  .pipe('bundle.js')
  .pipe(gulp.dest('./build'));
});
