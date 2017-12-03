var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var connect = require('gulp-connect');


gulp.task('less', function () {
  return gulp.src('./src/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cssmin().on('error', function(err) {
      console.log(err);
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch('./src/*.less', ['less']);
});

gulp.task('default', [ 'less', 'watch', 'connect' ]);
