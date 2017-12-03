var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('less', function () {
  return gulp.src('less/**/*.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  return gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch('less/*.less', ['less']);
  gulp.watch('index.html', ['html']);
});

gulp.task('default', [ 'less', 'html', 'watch', 'connect' ]);
