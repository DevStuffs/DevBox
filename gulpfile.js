var gulp = require('gulp'),
    gutil = require('gulp-util'),
    // coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    // gulpif = require('gulp-if'),
    // uglify = require('gulp-uglify'),
    // minifyHTML = require('gulp-minify-html'),
    // jsonminify = require('gulp-jsonminify'),
    concat = require('gulp-concat');

gulp.task('log', function() {
  gutil.log('Workflows are awesome');
});
