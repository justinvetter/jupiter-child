var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sassglob = require('gulp-sass-glob');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  gulp.src('./assets/scss/style.scss')
  .pipe(sassglob())
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "http://tianvetter-v2:8888/"
    });

    gulp.watch("assets/scss/**/*.scss", ['sass']);
    gulp.watch("./*.php").on('change', browserSync.reload);
});